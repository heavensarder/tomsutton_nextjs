const fs = require('fs');
const path = require('path');

const dirs = [
  'heating', 'oil', 'gas', 'boiler-breakdowns', 'boiler-maintenance-plans', 
  'boiler-servicing', 'combi-boiler-installation', 'lpg-boilers', 
  'new-boiler-installation-2', 'new-boilers', 'oil-boilers', 'renewable-technology', 
  'smart-thermostat-installation', 'unvented-hot-water', 'worcester-bosch'
];

const basePath = path.join('d:', 'tomsutton', 'src', 'app');

for (const dir of dirs) {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add whitespace-nowrap to prevent button text wraps
    const before = content;
    content = content.replace(/className="group relative inline-flex items-center justify-center px-/g, 'className="group relative inline-flex items-center justify-center whitespace-nowrap px-');
    content = content.replace(/className="inline-flex items-center justify-center px-/g, 'className="inline-flex items-center justify-center whitespace-nowrap px-');
    
    // Also fix the transparent styles if necessary?
    // Let's make "GET ONLINE QUOTE" the primary orange button across pages, and "GET IN TOUCH" the transparent one? 
    // In heating page, "GET ONLINE QUOTE" was transparent and "GET IN TOUCH" was orange. Maybe they should be flipped, but wait, the orange button gets more attention. 
    // Let's just fix the wrap for now and make sure the buttons look good.

    if (before !== content) {
        fs.writeFileSync(filePath, content);
        console.log(`Added whitespace-nowrap in ${dir}`);
    }
  }
}
