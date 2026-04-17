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

    // First replace \r\n
    content = content.replace(/\r\n/g, '\n');

    // I need to match the ENTIRE block of buttons.
    // The previous regex stopped at the *first* </Link>.
    // To match all links inside the div, let's match from <div className="flex flex-col sm:flex-row..."
    // to the next `<div className="flex items-center gap-4` (which is the reviews block).
    
    // Check if we can safely match everything between the button wrapper and the reviews/social proof block.
    // In bournemouth, the layout contains:
    // <div className="flex flex-col ... ">
    //   <Link ...> ... </Link>
    //   <Link ...> ... </Link>
    //   <Link ...> ... </Link> <!-- any extra links -->
    // </div>
    //
    // <div className="flex items-center gap-4 border-l-0 sm:border-l ...
    
    // Instead of arbitrary parsing, let's match exactly:
    const regex = /<div className="flex flex-col sm:flex-row[^>]*>[\s\S]*?(?:<\/Link>\s*)?<\/Link>\s*?(?:<\/Link>\s*)*?<div className="flex items-center gap-4 border-l-0/g;

    const newStart = `<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
                <Link href="/online-boiler-quote" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-gradient-to-r from-[#ff5e14] to-[#ea580c] text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-[0_10px_30px_rgba(255,94,20,0.3)] hover:shadow-[0_15px_40px_rgba(255,94,20,0.5)] hover:-translate-y-1">
                  <span className="flex items-center">
                    GET A FREE QUOTE
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
                <Link href="#contact" className="group relative inline-flex items-center justify-center whitespace-nowrap px-8 py-4 sm:px-10 bg-slate-800 border border-slate-700 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all hover:bg-slate-700">
                  <span className="flex items-center">
                    GET IN TOUCH
                  </span>
                </Link>
              </div>

              <div className="flex items-center gap-4 border-l-0`;

    if (content.match(regex)) {
        content = content.replace(regex, newStart);
        fs.writeFileSync(filePath, content);
        console.log(`Successfully fixed multiple links in ${dir}`);
    } else {
        // Fallback if the previous regex didn't match. 
        // This might happen if 'border-l-0' wasn't there.
        // Let's broaden the match:
        const broadRegex = /<div className="flex flex-col sm:flex-row[^>]*>([\s\S]*?)<div className="flex items-center gap-4/g;
        if (content.match(broadRegex)) {
            content = content.replace(broadRegex, newStart.replace('<div className="flex items-center gap-4 border-l-0', '<div className="flex items-center gap-4'));
            fs.writeFileSync(filePath, content);
            console.log(`Successfully fixed (broad) in ${dir}`);
        } else {
             console.log(`Failed in ${dir}`);
        }
    }
  }
}
