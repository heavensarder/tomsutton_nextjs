const fs = require('fs');
const path = require('path');

function moveFaqToVeryBottom(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            count += moveFaqToVeryBottom(fullPath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');

            if (!content.includes('<FaqAccordion')) continue;

            const faqIndex = content.indexOf('<FaqAccordion');
            let sectionStart = content.lastIndexOf('<section', faqIndex);
            
            // Allow for FAQs wrapped in a div instead of a section, if section is not found or is too far
            if (sectionStart === -1 || (faqIndex - sectionStart > 2000)) {
               sectionStart = content.lastIndexOf('<div', faqIndex);
            }

            if (sectionStart !== -1) {
                // Determine what tag to close based on what we matched
                const isSection = content.substring(sectionStart, sectionStart + 8).startsWith('<section');
                const closeTag = isSection ? '</section>' : '</div>';
                
                // Find the closing brace safely
                let depth = 0;
                let sectionEndPos = -1;
                
                // Super basic DOM matching - iterating until depth reaches 0
                const searchStr = isSection ? 'ection>' : 'div>';
                const openStr = isSection ? '<section' : '<div';
                
                for (let i = sectionStart; i < content.length; i++) {
                    if (content.substring(i, i + openStr.length) === openStr) {
                        depth++;
                    } else if (content.substring(i, i + closeTag.length) === closeTag) {
                        depth--;
                        if (depth === 0) {
                            sectionEndPos = i;
                            break;
                        }
                    }
                }

                if (sectionEndPos !== -1) {
                    const sectionEnd = sectionEndPos + closeTag.length;
                    
                    // The complete FAQ block
                    let faqSectionStr = content.substring(sectionStart, sectionEnd);
                    
                    // Also grab preceding comment if it exists e.g. {/* FAQs Section */}
                    const possibleCommentIdx = content.lastIndexOf('{/*', sectionStart);
                    if (possibleCommentIdx !== -1 && (sectionStart - possibleCommentIdx < 100)) {
                        const commentEndIdx = content.indexOf('*/}', possibleCommentIdx);
                        if (commentEndIdx !== -1 && commentEndIdx < sectionStart) {
                           const fullStrWithComment = content.substring(possibleCommentIdx, sectionEnd);
                           faqSectionStr = fullStrWithComment;
                           sectionStart = possibleCommentIdx;
                        }
                    }

                    // Remove it from current location
                    content = content.substring(0, sectionStart) + content.substring(sectionEnd);

                    // Insert at the VERY bottom, right before `</main>`
                    const mainEndIndex = content.lastIndexOf('</main>');
                    if (mainEndIndex !== -1) {
                        content = content.substring(0, mainEndIndex) + 
                                  '\n\n      {/* ----- FAQ Section Mounted at the Very End ----- */}\n      ' + 
                                  faqSectionStr.trim() + 
                                  '\n\n    ' + 
                                  content.substring(mainEndIndex);
                        
                        fs.writeFileSync(fullPath, content, 'utf8');
                        count++;
                        console.log(`Moved FAQ to absolute bottom in: ${fullPath}`);
                    }
                }
            }
        }
    }
    return count;
}

const targetDir = path.join(__dirname, '..', 'src', 'app');
const moved = moveFaqToVeryBottom(targetDir);
console.log(`\nDONE! Mapped ${moved} pages to drop FAQ just above footer.`);
