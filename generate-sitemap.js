const { SitemapStream, streamToPromise } = require('sitemap'); // Correct way to import
const fs = require('fs');
const path = require('path');
const { Readable } = require('stream'); // Needed for creating a readable stream from URLs

const hostname = 'https://www.donsamec.com'; // IMPORTANT: REPLACE WITH YOUR ACTUAL DOMAIN

// Define the URLs for your sitemap
// Ensure these match the paths in your website's navigation and structure
const urls = [
    { url: '/home/', changefreq: 'monthly', priority: 1.0, lastmod: '2025-05-24' }, // Update lastmod with actual date
    { url: '/collage/', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-24' },
    { url: '/photo/', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-24' },
    { url: '/video/', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-24' },
    // Add any other important static pages here, for example:
    // { url: '/about/', changefreq: 'monthly', priority: 0.7, lastmod: '2025-05-24' },
    // { url: '/contact/', changefreq: 'monthly', priority: 0.6, lastmod: '2025-05-24' },
];

async function generateSitemap() {
    try {
        // Create a stream of URLs
        const sitemapStream = new SitemapStream({ hostname: hostname });

        // Pipe your entries from the URLs array to the sitemap stream
        const readableStream = Readable.from(urls);
        readableStream.pipe(sitemapStream);

        // Convert the stream to a promise that resolves with the XML string
        const sitemapXml = await streamToPromise(sitemapStream);

        // Define the path where the sitemap.xml will be saved
        const sitemapPath = path.join(__dirname, 'sitemap.xml');

        // Write the sitemap to the file system
        fs.writeFileSync(sitemapPath, sitemapXml.toString());

        console.log('sitemap.xml generated successfully at:', sitemapPath);
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Call the function to generate the sitemap
generateSitemap();