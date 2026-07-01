const fs = require('fs');
let data = fs.readFileSync('src/config/siteData.ts', 'utf8');
const urls = [
  '/kuromatsu.png',
  '/kaede.png',
  '/hero_bonsai.png'
];
let i = 0;
data = data.replace(/https:\/\/images\.unsplash\.com\/[^"]+/g, () => {
  const url = urls[i % urls.length];
  i++;
  return url;
});
fs.writeFileSync('src/config/siteData.ts', data);
console.log('Images updated to local files successfully.');
