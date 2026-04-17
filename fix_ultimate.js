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

    // Normalize Windows carriage returns
    content = content.replace(/\r\n/g, '\n');

    // We replace the entire button container
    // We need to match from `<div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start">`
    // to however far it takes to close the second Link (`Get in Touch`).
    
    // I'll do a regex match
    const regex = /<div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center lg:justify-start">[\s\S]*?(?:Get in Touch[\s\S]*?<\/svg>[\s\S]*?<\/span>[\s\S]*?<\/Link>)/m;

    const replacement = `<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full justify-center lg:justify-start">
                <Link 
                  href="/online-boiler-quote" 
                  className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-gradient-to-r from-[#ff5e14] to-[#ea580c] text-white rounded-xl font-bold text-base sm:text-lg tracking-wide hover:shadow-[0_0_30px_rgba(255,94,20,0.4)] transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get a Free Quote
                    <svg className="w-5 h-5 ml-2 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>

                <Link 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl font-bold text-base sm:text-lg tracking-wide hover:bg-slate-800 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get in Touch
                    <svg className="w-5 h-5 ml-2 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                  </span>
                </Link>`;

    if (content.match(regex)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content);
        console.log(`Replaced completely in ${dir}`);
    } else {
        console.log(`Regex not matched in ${dir}`);
    }
  }
}
