const fs = require('fs');
const path = require('path');

const dirs = [
  'heating', 'oil', 'gas', 'boiler-breakdowns', 'boiler-maintenance-plans', 
  'boiler-servicing', 'combi-boiler-installation', 'lpg-boilers', 
  'new-boiler-installation-2', 'new-boilers', 'oil-boilers', 'renewable-technology', 
  'smart-thermostat-installation', 'unvented-hot-water', 'worcester-bosch',
  'bournemouth', 'brockenhurst', 'christchurch', 'hampshire', 'lymington', 
  'new-milton', 'ringwood', 'southampton', 'southbourne'
];

const basePath = path.join('d:', 'tomsutton', 'src', 'app');

for (const dir of dirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Find the first href="/contact" (usually the hero button) and replace it
    const linkIndex = content.indexOf('href="/contact"');
    if (linkIndex !== -1) {
        content = content.substring(0, linkIndex) + content.substring(linkIndex).replace('href="/contact"', 'href="#contact"');
        updated = true;
    }

    if (content.includes('>CONTACT US<')) {
      content = content.replace(/>CONTACT US</g, '>GET IN TOUCH<');
      updated = true;
    }
    
    if (content.includes('>Contact Us<')) {
      content = content.replace(/>Contact Us</g, '>Get in Touch<');
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${dir}/page.tsx`);
    }
  }
}
