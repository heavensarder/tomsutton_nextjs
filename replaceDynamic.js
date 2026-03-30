const fs = require('fs');

const files = [
  'src/app/combi-boiler-installation/page.tsx',
  'src/app/lpg-boilers/page.tsx',
  'src/app/new-boilers/page.tsx',
  'src/app/oil-boilers/page.tsx',
  'src/app/online-boiler-quote/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import dynamic from 'next\/dynamic';\r?\n?/, '');
  
  // Replace the dynamic import block
  const dynamicRegex = /const QuoteComponent = dynamic\(\(\) => import\('@\/components\/QuoteComponent'\), \{[\s\S]*?\}\);/;
  content = content.replace(dynamicRegex, "import QuoteComponent from '@/components/QuoteComponent';");
  
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
