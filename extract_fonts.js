const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const fonts = html.match(/--[^:]+font-family:[^;{}]+;/g) || [];
console.log([...new Set(fonts)].join('\n'));
