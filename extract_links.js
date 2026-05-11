const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const links = html.match(/<link[^>]+rel=['"]stylesheet['"][^>]*>/gi) || [];
console.log(links.join('\n'));
