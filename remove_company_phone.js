const fs = require('fs');

const filesToUpdate = [
  {
    path: 'app/contact-us/page.tsx',
    replaces: [
      { find: 'Phone, WhatsApp, and email support', replace: 'Email support' },
      { find: 'Call, WhatsApp, or email us', replace: 'Email us' },
      { find: /<a href=\{	el:\$\{COMPANY\.phone\}\}.*?<\/a>/s, replace: '' }
    ]
  },
  {
    path: 'app/components/Footer.tsx',
    replaces: [
      { find: /<a href=\{	el:\$\{COMPANY\.phone\}\}.*?<\/a>/s, replace: '' }
    ]
  },
  {
    path: 'app/book-now/page.tsx',
    replaces: [
      { find: 'phone or WhatsApp.', replace: 'email.' },
      { find: /<div className="card"[^>]*>[\s\S]*?<h3>?? WhatsApp Booking<\/h3>[\s\S]*?<\/div>/, replace: '' }
    ]
  },
  {
    path: 'app/lib/schema.ts',
    replaces: [
      { find: /telephone: COMPANY\.phone,/g, replace: '' }
    ]
  },
  {
    path: 'app/page.tsx',
    replaces: [
      { find: 'by phone at airporttravelcar@gmail.com, or via email', replace: 'or via email' }
    ]
  },
  {
    path: 'app/blog/[slug]/page.tsx',
    replaces: [
      { find: 'by phone at airporttravelcar@gmail.com, or via email', replace: 'or via email' }
    ]
  },
  {
    path: 'app/airport-taxi-gatwick/page.tsx',
    replaces: [
      { find: 'Phone, WhatsApp, or online booking', replace: 'Email or online booking' },
      { find: "icon: '??', title: 'Easy Contact'", replace: "icon: '??', title: 'Easy Contact'" }
    ]
  },
  {
    path: 'app/airport-taxi-heathrow/page.tsx',
    replaces: [
      { find: 'Book online, by phone, or via email.', replace: 'Book online or via email.' }
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
