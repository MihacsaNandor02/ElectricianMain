const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const h1Match = html.match(/dmContent h1\{[^}]*\}/g);
const h2Match = html.match(/dmContent h2\{[^}]*\}/g);
console.log('H1:', h1Match);
console.log('H2:', h2Match);
