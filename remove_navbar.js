const fs = require('fs');

const filesToUpdate = [
  {
    path: 'app/components/Navbar.tsx',
    replaces: [
      { find: /<a href=\{	el:\$\{COMPANY\.phone\}\}[\s\S]*?<\/a>/, replace: '' },
      { find: /<a href=\{https:\/\/wa\.me\/[0-9]+}[\s\S]*?<\/a>/, replace: '' },
      { find: /href=\{https:\/\/wa\.me.*?\}/g, replace: 'href="/contact-us/"' }
    ]
  },
  {
    path: 'app/components/BookingForm.tsx',
    replaces: [
      { find: /\/\/ Build WhatsApp message as fallback[\s\S]*?window\.open\(whatsappUrl, '_blank'\);/s, replace: 'alert("There was an error submitting your booking. Please try again.");' }
    ]
  },
  {
    path: 'app/globals.css',
    replaces: [
      { find: /\/\* ===== WHATSAPP BUTTON ===== \*\/[\s\S]*?\.whatsapp-btn:hover \{[\s\S]*?\}[\s\S]*?\.whatsapp-btn svg \{[\s\S]*?\}/s, replace: '' }
    ]
  }
];

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file.path, 'utf8');
  file.replaces.forEach(rep => {
    content = content.replace(rep.find, rep.replace);
  });
  fs.writeFileSync(file.path, content, 'utf8');
  console.log('Updated ' + file.path);
});
