const fs = require('fs');
const html = fs.readFileSync('electricgh.html', 'utf8');
const styles = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
fs.writeFileSync('electricgh.css', styles.map(s => s.replace(/<\/?style[^>]*>/g, '')).join('\n'));
