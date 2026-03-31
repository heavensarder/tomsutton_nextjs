const mysql = require('mysql2/promise');

async function migrate() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tomsutton',
  });

  try {
    console.log('Creating blog_categories table...');
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS blog_categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    console.log('Creating blog_posts table...');
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        content LONGTEXT NOT NULL,
        excerpt TEXT,
        featured_image VARCHAR(500),
        category_id INT,
        meta_title VARCHAR(255),
        meta_description TEXT,
        status ENUM('draft', 'published') DEFAULT 'draft',
        published_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES blog_categories(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    console.log('Inserting demo categories...');
    const [catRows] = await connection.execute('SELECT COUNT(*) as count FROM blog_categories');
    if (catRows[0].count === 0) {
      await connection.execute(`
        INSERT INTO blog_categories (name, slug) VALUES 
        ('Heating Tips', 'heating-tips'),
        ('Plumbing Guides', 'plumbing-guides'),
        ('Boiler Maintenance', 'boiler-maintenance'),
        ('Company News', 'company-news')
      `);
      console.log('Demo categories inserted.');
    } else {
      console.log('Categories already exist.');
    }

    console.log('Inserting demo posts...');
    const [postRows] = await connection.execute('SELECT COUNT(*) as count FROM blog_posts');
    if (postRows[0].count === 0) {
      const demoContent1 = `
<p>As the winter chill sets in, ensuring your home remains a warm, comfortable haven becomes a top priority. A reliable boiler is the beating heart of your home\'s heating system, and making the decision to replace an old, inefficient unit can yield spectacular long-term benefits.</p>
<h2>1. Drastically Lower Energy Bills</h2>
<p>Modern condensing boilers are incredibly efficient—often running at over 92% efficiency compared to older models that might struggle to reach 60%. This massive leap in performance means that almost every penny you spend on gas is converted directly into heat.</p>
<p><img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1200" alt="Winter frost on a window pane" style="border-radius: 12px; margin: 2rem 0; width: 100%; object-fit: cover;" /></p>
<h2>2. Ultimate Reliability</h2>
<p>There is nothing worse than waking up to a freezing house and a cold shower because a 15-year-old boiler has finally given up the ghost. A brand new, premium boiler from a manufacturer like <strong>Worcester Bosch</strong> gives you total peace of mind.</p>
<h2>3. Smart Home Integration</h2>
<p>With a modern boiler installation, you can seamlessly integrate smart thermostats like the Google Nest. This gives you precise control over your heating from your smartphone, learning your routines to maximize comfort while minimizing waste.</p>
<blockquote>
<p>"Upgrading to a new premium condensing boiler is one of the single most impactful investments you can make for your home\'s comfort and your family\'s wallet."</p>
</blockquote>
<p>If you're considering an upgrade, why not let the local experts at Tom Sutton Heating provide a free, no-obligation quote? Click the button at the top of the page to get started!</p>
`;

      const demoContent2 = `
<p>When an unexpected leak springs or a pipe bursts, time is of the essence. Knowing exactly what steps to take can be the difference between a minor cleanup and thousands of pounds in catastrophic water damage.</p>
<h2>Immediate Action: Locate Your Stopcock!</h2>
<p>The single most important plumbing feature in your entire house is the main internal water stopcock. Usually located under the kitchen sink, in an airing cupboard, or under the stairs, this valve instantly shuts off the mains water supply to your property.</p>
<p><img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1200" alt="Plumber fixing a pipe" style="border-radius: 12px; margin: 2rem 0; width: 100%; object-fit: cover;" /></p>
<ul>
<li><strong>Turn it clockwise:</strong> To shut the water off completely.</li>
<li><strong>Open your taps:</strong> Once shut, turn on your cold taps to drain the remaining water out of the pipes.</li>
<li><strong>Turn off the electrics:</strong> If the leak is near any electrical fittings, turn off your power at the consumer unit.</li>
</ul>
<p>Once the immediate threat is neutralized, your next step is to call out an emergency local plumber to professionally repair the damage and evaluate the system.</p>
`;

      await connection.execute(`
        INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, category_id, meta_title, meta_description, status, published_at) VALUES 
        (
          'Top 3 Reasons to Upgrade Your Boiler Before Winter', 
          'top-3-reasons-upgrade-boiler-winter', 
          ?,
          'Discover why replacing your old boiler with a high-efficiency modern unit is the smartest investment you can make this season.',
          'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200',
          1,
          'Top 3 Reasons to Upgrade Your Boiler Before Winter | Tom Sutton Heating',
          'Learn the incredible benefits of upgrading to a modern, highly efficient condensing boiler this winter.',
          'published',
          NOW()
        ),
        (
          'Emergency Plumbing: What to Do When a Pipe Bursts', 
          'emergency-plumbing-what-to-do-when-pipe-bursts', 
          ?,
          'A burst pipe can cause catastrophic property damage in minutes. Follow these vital emergency steps to protect your home.',
          'https://images.unsplash.com/photo-1502672260266-1c1c24240938?auto=format&fit=crop&q=80&w=1200',
          2,
          'What to Do When a Pipe Bursts | Emergency Plumbing Guide',
          'Immediate, step-by-step instructions on what to do when you discover a major plumbing leak or burst pipe in your home.',
          'published',
          DATE_SUB(NOW(), INTERVAL 3 DAY)
        )
      `, [demoContent1, demoContent2]);
      console.log('Demo posts inserted.');
    } else {
      console.log('Posts already exist.');
    }

  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

migrate();
