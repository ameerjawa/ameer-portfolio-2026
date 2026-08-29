import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message, website } = body || {};

    if (website) {
      return NextResponse.json({ ok: true }, { headers: corsHeaders });
    }

    if (!name || !email || !message || message.length < 10) {
      return NextResponse.json(
        { error: 'Invalid input.' },
        { status: 400, headers: corsHeaders }
      );
    }

    // No outbound mail provider is configured yet — acknowledge the submission.
    // Wire this to a transactional email service (Resend, SendGrid, etc.) later.
    return NextResponse.json(
      { ok: true },
      { status: 200, headers: corsHeaders }
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500, headers: corsHeaders }
    );
  }
}
