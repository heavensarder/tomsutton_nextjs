const fs = require('fs');
const path = require('path');

const dirsToRemove = [
  'alpha',
  'alpha-e-tec-plus',
  'alpha-evoke',
  'alpha-e-tec-system',
  'alpha-e-tec-regular',
  'worcester-bosch-i-system'
];

dirsToRemove.forEach(dir => {
  const fullPath = path.join(__dirname, 'src', 'app', dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`Removed: ${fullPath}`);
  } else {
    console.log(`Not found: ${fullPath}`);
  }
});
