const fs = require('fs'); 
const path = require('path'); 

function walk(dir) { 
  let results = []; 
  const list = fs.readdirSync(dir); 
  list.forEach(file => { 
    file = path.join(dir, file); 
    const stat = fs.statSync(file); 
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file)); 
    } else if (file.endsWith('page.tsx')) { 
      results.push(file); 
    } 
  }); 
  return results; 
} 

const pages = walk('src/app').filter(p => !p.includes('admin') && !p.includes('contact')); 
let modCount = 0; 

pages.forEach(p => { 
  let content = fs.readFileSync(p, 'utf8'); 
  if (content.includes('use client')) { 
    content = content.replace(/['"]use client['"];?\r?\n?/g, ''); 
    fs.writeFileSync(p, content); 
    console.log('Removed from', p); 
    modCount++; 
  } 
}); 

console.log('Total modified:', modCount);
