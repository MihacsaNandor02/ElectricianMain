const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const outfitMatch = html.match(/.{0,50}Outfit.{0,50}/g);
const sourceMatch = html.match(/.{0,50}Source Sans Pro.{0,50}/g);
console.log('Outfit:', outfitMatch ? outfitMatch.slice(0,3) : null);
console.log('Source:', sourceMatch ? sourceMatch.slice(0,3) : null);
