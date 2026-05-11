const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const vars = html.match(/--[a-zA-Z0-9-]+:\s*[^;{}]+;/g) || [];
console.log([...new Set(vars)].slice(0, 50).join('\n'));
