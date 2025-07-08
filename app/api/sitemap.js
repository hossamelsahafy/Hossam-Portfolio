export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "no-store"); // مهم عشان Google مايشوفش نسخة cached
  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/services</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/resume</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/work</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/contact</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://hossam-portfolio-ruby.vercel.app/Hossam-Elsahafy.pdf</loc>
  <lastmod>2025-06-03T07:38:42+00:00</lastmod>
  <priority>0.80</priority>
</url>
</urlset>`);
}
