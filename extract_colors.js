const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const colors = html.match(/--color_[a-zA-Z0-9-]+:\s*[^;{}]+;/g) || [];
console.log([...new Set(colors)].join('\n'));
