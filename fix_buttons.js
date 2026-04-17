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

    // Rename 'CONTACT US' to 'GET ONLINE QUOTE' and change href="/contact" to href="/online-boiler-quote" in the hero.
    // The safest way is to find `<Link href="/contact"` near `<Link href="#contact"`.
    const scrollerIndex = content.indexOf('href="#contact"');
    if (scrollerIndex !== -1) {
       // Search the hero block for CONTACT US
       const topHalf = content.substring(0, scrollerIndex + 1000);
       let modifiedTopHalf = topHalf
         .replace(/href="\/contact"/g, 'href="/online-boiler-quote"')
         .replace(/>CONTACT US</g, '>GET ONLINE QUOTE<')
         .replace(/>Contact Us</g, '>Get Online Quote<');
       
       content = modifiedTopHalf + content.substring(scrollerIndex + 1000);
       fs.writeFileSync(filePath, content);
       console.log(`Fixed quote button in ${dir}/page.tsx`);
    }
  }
}
