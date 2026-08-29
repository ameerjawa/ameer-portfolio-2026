const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0d1714"/>
  <rect width="64" height="64" rx="14" fill="none" stroke="#2dd4a7" stroke-opacity="0.3" stroke-width="2"/>
  <text x="32" y="42" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="700" fill="#2dd4a7" text-anchor="middle">AJ</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('public/favicon.png')
  .then(() => console.log('favicon.png generated'))
  .catch((e) => { console.error(e); process.exit(1); });
