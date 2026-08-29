const sharp = require('sharp');
const fs = require('fs');

const svg = fs.readFileSync('public/og.svg', 'utf8');

sharp(Buffer.from(svg))
  .png()
  .toFile('public/og.png')
  .then(() => console.log('og.png generated'))
  .catch((e) => { console.error(e); process.exit(1); });
