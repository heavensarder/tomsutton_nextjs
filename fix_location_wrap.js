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

    // Add whitespace-nowrap to all inline-flex items-center justify-center buttons
    const before = content;
    // Replace if it doesn't already have whitespace-nowrap
    content = content.replace(/className="group relative inline-flex items-center justify-center px-8/g, 'className="group relative inline-flex items-center justify-center whitespace-nowrap px-8');
    
    // Some buttons might have ml-0 sm:ml-4 which I added, ensure they have it too if they matched
    
    if (before !== content) {
        fs.writeFileSync(filePath, content);
        console.log(`Added whitespace-nowrap in ${dir}`);
    }
  }
}
