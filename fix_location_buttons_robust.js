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

    if (content.includes('Get in Touch') && content.includes('bg-slate-800/50')) {
        console.log(`Already has ghost link in ${dir}`);
        continue;
    }

    const exactSnippet = `<span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </Link>`;
                
    const newGhostLink = `

                <Link 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl font-bold text-base sm:text-lg tracking-wide hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  </span>
                </Link>`;            

    if (content.includes('Get a Free Quote')) {
       content = content.replace(exactSnippet, exactSnippet + newGhostLink);
       fs.writeFileSync(filePath, content);
       console.log(`Updated ${dir}`);
    } else {
       console.log(`No match for snippet in ${dir}`);
    }
  }
}
