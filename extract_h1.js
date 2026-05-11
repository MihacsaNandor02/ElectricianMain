const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const h1styles = html.match(/h1\s*{[^}]*}/g) || [];
const bodyStyles = html.match(/body\s*{[^}]*}/g) || [];
console.log('H1:', h1styles.join('\n'));
console.log('Body:', bodyStyles.join('\n'));
