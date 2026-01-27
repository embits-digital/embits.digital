const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '../dist/embits-digital/browser');

fs.copyFileSync(
  path.join(dist, 'index.html'),
  path.join(dist, '404.html')
);

console.log('SPA fallback configured (404.html)');