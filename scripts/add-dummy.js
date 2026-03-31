const mysql = require('mysql2/promise');

async function run() {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'tomsutton' });
  try {
    const content3 = '<p>Understanding the basics of bleeding your radiators can save you money...</p>';
    const content4 = '<p>Regular servicing ensures your boiler stays within its warranty...</p>';
    
    await connection.execute(`
      INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, category_id, status, published_at) VALUES 
      ('How to Bleed Your Radiators Like a Pro', 'how-to-bleed-radiators', ?, 'A quick and easy guide to getting the air out of your heating system for maximum efficiency.', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200', 1, 'published', NOW()),
      ('The Importance of Annual Boiler Servicing', 'importance-of-annual-boiler-servicing', ?, 'Don\\'t wait for a breakdown. Learn why an annual service is vital for safety and savings.', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200', 3, 'published', NOW())
    `, [content3, content4]);
    console.log('Dummy posts added successfully.');
  } catch(e) { 
    if (e.code === 'ER_DUP_ENTRY') {
      console.log('Dummy posts already exist based on unique slug constraints.');
    } else {
      console.error(e); 
    }
  }
  await connection.end();
}
run();
