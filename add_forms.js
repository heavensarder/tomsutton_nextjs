const fs = require('fs');
const path = require('path');

const serviceDirs = [
  'heating', 'oil', 'gas', 'boiler-breakdowns', 'boiler-maintenance-plans', 
  'boiler-servicing', 'combi-boiler-installation', 'lpg-boilers', 
  'new-boiler-installation-2', 'new-boilers', 'oil-boilers', 'renewable-technology', 
  'smart-thermostat-installation', 'unvented-hot-water', 'worcester-bosch'
];

const basePath = path.join('d:', 'tomsutton', 'src', 'app');

for (const dir of serviceDirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has the form
    if (content.includes('ContactSection')) continue;

    // Add import
    const importStatement = "import ContactSection from '@/components/ContactSection';\n";
    
    // Insert import after the last import statement or at the top
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
    } else {
      content = importStatement + content;
    }

    // Insert tag before </main>
    if (content.includes('</main>')) {
      content = content.replace('</main>', '  <ContactSection />\n    </main>');
    } else if (content.includes('</>')) {
      // If it's a fragment at the end, insert before it
      content = content.replace(/<\/>\s*$/, '  <ContactSection />\n    </>');
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${dir}/page.tsx`);
  }
}
