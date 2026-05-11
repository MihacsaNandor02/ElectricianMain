const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const hex = html.match(/#[0-9a-fA-F]{3,6}\b/g) || [];
const rgb = html.match(/rgba?\([^)]+\)/g) || [];
const fonts = html.match(/font-family:[^;\"']+/g) || [];
console.log('Hex Colors:', [...new Set(hex)]);
console.log('RGB Colors:', [...new Set(rgb)]);
console.log('Fonts:', [...new Set(fonts)].slice(0, 10));
