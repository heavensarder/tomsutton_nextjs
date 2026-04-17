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

    // Currently, the first link points to href="#contact" and says GET IN TOUCH.
    // We want to restore href="/contact" saying CONTACT US.
    // And append a NEW button next to it that points to href="#contact" saying GET IN TOUCH.
    
    const linkRegex = /<Link\s+href="#contact"[\s\S]*?<\/Link>/;
    const match = content.match(linkRegex);
    
    if (match && !content.includes('href="/contact"')) { 
      // Ensure we haven't already restored it
      let originalLink = match[0];
      
      // Let's recreate the CONTACT US button
      let restoreOldLink = originalLink
        .replace('href="#contact"', 'href="/contact"')
        .replace(/>GET IN TOUCH</g, '>CONTACT US<')
        .replace(/>Get in Touch</g, '>Contact Us<');
        
      // For the new GET IN TOUCH button, let's give it a ghost/outline styling so it doesn't clash.
      // If original button uses bg-gradient, we rip it out for ghost.
      // Easiest is just rendering them side-by-side. 
      let newScrollerLink = originalLink;

      // Replace the single button with both buttons (Old then New)
      content = content.replace(originalLink, restoreOldLink + '\n                ' + newScrollerLink);

      fs.writeFileSync(filePath, content);
      console.log(`Fixed buttons in ${dir}/page.tsx`);
    } else if (match && content.includes('href="/contact"')) {
      // If the page already has href="/contact", it implies my previous script failed to touch it
      // or it was already present somewhere else. 
      // Let's find the href="/contact" link and append a new scroller link if a scroller link isn't already present next to it.
    }
  }
}
