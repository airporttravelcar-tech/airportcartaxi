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

    // Remove WhatsApp blocks
    if (content.includes('WhatsApp')) {
      content = content.replace(/<a[^>]*wa\.me[^>]*>.*?<\/a>/gs, '');
      content = content.replace(/or via WhatsApp/g, 'or via email');
      content = content.replace(/via WhatsApp/g, 'via email');
      changed = true;
    }
    
    // Replace telephone string in text
    if (content.includes('tel:')) {
      content = content.replace(/href="tel:[^"]*"/g, 'href="mailto:airporttravelcar@gmail.com"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated: ' + filePath);
    }
  }
});
