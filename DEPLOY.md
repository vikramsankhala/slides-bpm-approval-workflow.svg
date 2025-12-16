# Deployment Guide

## Quick Deploy to Netlify (Easiest Method)

### Option 1: Drag & Drop (No Git Required)

1. **Prepare your files**
   - Make sure all files are in the project folder:
     - `index.html`
     - `slides/` folder with all SVG files
     - `README.md` (optional)

2. **Deploy to Netlify**
   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Sign up or log in (free account)
   - Drag and drop your entire project folder onto the Netlify dashboard
   - Wait for deployment (usually 10-30 seconds)
   - Your site is live! You'll get a URL like `random-name-12345.netlify.app`

3. **Customize your site name** (optional)
   - Go to Site settings → Change site name
   - Choose a custom name like `svg-slide-player-demo`
   - Your URL becomes `svg-slide-player-demo.netlify.app`

### Option 2: Git Integration (Recommended for Updates)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/svg-slide-player.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Click "Deploy site"

3. **Automatic deployments**
   - Every time you push to GitHub, Netlify will automatically redeploy
   - No need to drag & drop again!

## Deploy to GitHub Pages

1. **Create repository and push files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/svg-slide-player.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select branch: `main` and folder: `/ (root)`
   - Click Save
   - Your site will be at `your-username.github.io/svg-slide-player`

## Deploy to Vercel

1. **Install Vercel CLI** (optional, or use web interface)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   Or drag & drop at [vercel.com](https://vercel.com)

## Important Notes

- **All hosting services are FREE** for static sites like this
- **HTTPS is automatic** - no configuration needed
- **Custom domains** can be added later (also free on most platforms)
- **No server needed** - this is a static site, perfect for these services

## Recommended: Netlify

Netlify is recommended because:
- ✅ Easiest drag & drop deployment
- ✅ Automatic HTTPS
- ✅ Free custom domain
- ✅ Great performance
- ✅ Easy to update (just drag & drop again or use Git)

## Troubleshooting

If slides don't load:
- Make sure all files in `slides/` folder are included
- Check browser console for errors
- Verify file paths in `index.html` match your folder structure

