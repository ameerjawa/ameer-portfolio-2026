import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};


export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      message,
      website,
    } = body || {};

    // Honeypot spam protection
    if (website) {
      return NextResponse.json(
        { ok: true },
        { headers: corsHeaders }
      );
    }

    // Validation
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length < 2 ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { error: 'Invalid input.' },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

   if (!serviceId || !templateId || !publicKey) {
  return NextResponse.json(
    {
      error: 'Email service is not configured.',
      diagnostics: {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      },
    },
    {
      status: 500,
      headers: corsHeaders,
    }
  );
}

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      company:
        typeof company === 'string' && company.trim()
          ? company.trim()
          : 'Not provided',
      message: message.trim(),
      reply_to: email.trim(),

      time: new Date().toLocaleString('en-CA', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'America/Toronto',
      }),
    };

    const payload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    };

    // Optional, but recommended if you enabled Private Key
    // authorization in EmailJS.
    if (privateKey) {
      payload.accessToken = privateKey;
    }

    const emailJsResponse = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();

      console.error(
        'EmailJS error:',
        emailJsResponse.status,
        errorText
      );

      return NextResponse.json(
        { error: 'Failed to send email.' },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error('Contact route error:', error);

    return NextResponse.json(
      { error: 'Failed to process request.' },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
