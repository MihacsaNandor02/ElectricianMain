const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const h1Font = html.match(/.{0,50}h1[^}]*font-family:[^;{}]+.{0,50}/g);
const h2Font = html.match(/.{0,50}h2[^}]*font-family:[^;{}]+.{0,50}/g);
console.log('H1 Font:', h1Font);
console.log('H2 Font:', h2Font);
