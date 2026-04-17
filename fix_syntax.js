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

    const searchString = `                  </div>
                </div>

              </div>
            </div>

            {/* Right Image Column`;

    const replaceString = `                  </div>
                </div>
            </div>

            {/* Right Image Column`;

    if (content.includes(searchString)) {
        content = content.replace(searchString, replaceString);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed syntax in ${dir}`);
    } else {
        console.log(`String not found in ${dir}`);
    }
  }
}
