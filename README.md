# 📚 NOVEL HERE

A free novel discovery and download website — search, browse by genre/language/rating, view novel details, save to a reading list, and an admin panel to manage novels.

## Run locally

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Build for production

```bash
npm run build
```

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit - NOVEL HERE"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/novel-here.git
git push -u origin main
```

## Deploy

Connect the GitHub repo to [vercel.com](https://vercel.com) → Add New Project → Import → Deploy.

## Project structure

```
novel-here/
├── public/
│   ├── index.html      (SEO meta tags here)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json
└── src/
    ├── data/novels.js          (all novel data + filter options)
    ├── components/
    │   ├── StarRating.js
    │   ├── NovelCard.js
    │   ├── Navbar.js
    │   └── Footer.js
    ├── pages/
    │   ├── HomePage.js
    │   ├── SearchPage.js
    │   ├── NovelDetailPage.js
    │   ├── AccountPage.js
    │   └── AdminPage.js
    ├── App.js
    ├── index.js
    └── index.css
```

## Next steps (not included yet)
- Real backend (Node.js + Express) and database (MongoDB)
- Real file storage for PDFs/EPUBs (Cloudinary/S3)
- Real authentication (JWT)
