const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, 'app');

walk(appDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    // Remove the anchor tag with tel: completely
    const regex = /<a href="tel:\+447700900000"[^>]*>.*?<\/a>/gs;
    if (content.match(regex)) {
      content = content.replace(regex, '');
      changed = true;
    }
    
    // Replace telephone string in text
    if (content.includes('+44 7700 900000')) {
      content = content.replace(/\+44 7700 900000/g, 'airporttravelcar@gmail.com');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated: ' + filePath);
    }
  }
});
