const fs = require('fs');
const path = require('path');

function fixLayout() {
  const dir = path.join(process.cwd(), 'src', 'app');
  
  function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      } else {
        if(fullPath.endsWith('page.tsx')) { arrayOfFiles.push(fullPath); }
      }
    });
    return arrayOfFiles;
  }
  
  const pages = getAllFiles(dir);
  let fixedCount = 0;
  
  pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Skip if no FaqAccordion or no </main>
    if (!content.includes('<FaqAccordion') || !content.includes('</main>')) {
        return;
    }
    
    let faqSectionStr = '';
    
    // Find the entire FAQ section
    const faqPos = content.indexOf('<FaqAccordion');
    if (faqPos !== -1) {
        let sectionStart = content.lastIndexOf('<section', faqPos);
        const commentStart = content.lastIndexOf('{/* FAQs Section */}', sectionStart);
        if (commentStart !== -1 && (sectionStart - commentStart) < 100) {
            sectionStart = commentStart;
        }

        const sectionEndPos = content.indexOf('</section>', faqPos);
        
        if (sectionStart !== -1 && sectionEndPos !== -1) {
            const sectionEnd = sectionEndPos + '</section>'.length;
            faqSectionStr = content.substring(sectionStart, sectionEnd);
            content = content.substring(0, sectionStart) + content.substring(sectionEnd);
        }
    }
    
    if (faqSectionStr) {
        // Place FAQ right before LocationContact if it exists, otherwise before </main>
        let insertionPoint = content.lastIndexOf('</main>');
        const contactPos = content.indexOf('<LocationContact');
        
        if (contactPos !== -1) {
             insertionPoint = content.lastIndexOf('\n', contactPos);
             if (insertionPoint === -1) insertionPoint = contactPos;
        }

        if (insertionPoint !== -1) {
            content = content.substring(0, insertionPoint) + '\n\n    ' + faqSectionStr + '\n' + content.substring(insertionPoint);
        }
        
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        fs.writeFileSync(file, content, 'utf8');
        fixedCount++;
        console.log('Fixed:', file);
    }
  });
  
  console.log('Total fixed:', fixedCount);
}

fixLayout();
