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

    // Find the latest div we just injected and replace it entirely!
    const regex = /<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full justify-center lg:justify-start">[\s\S]*?<\/Link>/m;

    const replacement = `<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 justify-center lg:justify-start">
                <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-gradient-to-r from-[#ff5e14] to-[#ea580c] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span>GET A FREE QUOTE</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                </Link>
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-white/10 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-white/20 backdrop-blur-sm">
                  <span>GET IN TOUCH</span>
                </Link>`;

    if (content.match(regex)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed definitively in ${dir}`);
    } else {
        console.log(`Failed regex in ${dir}`);
    }
  }
}
