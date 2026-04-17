const fs = require('fs');
const path = require('path');

const locationDirs = [
  'bournemouth', 'brockenhurst', 'christchurch', 'hampshire', 'lymington', 
  'new-milton', 'ringwood', 'southampton', 'southbourne'
];

const basePath = path.join('d:', 'tomsutton', 'src', 'app');

for (const dir of locationDirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('ContactSection')) continue;

    const importStatement = "import ContactSection from '@/components/ContactSection';\n";
    
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
    } else {
      content = importStatement + content;
    }

    if (content.includes('</main>')) {
      content = content.replace('</main>', '  <ContactSection />\n    </main>');
    } else if (content.includes('</>')) {
      content = content.replace(/<\/>\s*$/, '  <ContactSection />\n    </>');
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${dir}/page.tsx`);
  }
}
