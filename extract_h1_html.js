const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
if (match) console.log(match[0]);
