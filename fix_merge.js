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

    content = content.replace(/\r\n/g, '\n');

    // 1. Remove the premature closing div between the buttons and the reviews
    const prematureDivSearch = `              </div>

              <div className="flex items-center gap-4 border-l-0`;
    
    // We can just use standard gap-6 for the container so there's breathing room between buttons and reviews
    content = content.replace('gap-4 w-full justify-center lg:justify-start', 'gap-6 w-full justify-center lg:justify-start');

    if (content.includes(prematureDivSearch)) {
        content = content.replace(prematureDivSearch, `                <div className="flex items-center gap-4 border-l-0`);
        
        // 2. Add the closing div back at the bottom of the reviews block
        const reviewsEndSearch = `                  </div>
                </div>
            </div>

            {/* Right Image Column`;
            
        const reviewsEndReplace = `                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column`;

        content = content.replace(reviewsEndSearch, reviewsEndReplace);
        fs.writeFileSync(filePath, content);
        console.log(`Successfully merged layout in ${dir}`);
    } else {
        console.log(`Search string not found in ${dir}`);
    }
  }
}
