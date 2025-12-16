# Deploy to Netlify - Step by Step Guide

## Method 1: Drag & Drop (Fastest - 2 minutes)

### Step 1: Prepare Your Files
✅ All files are ready in your project folder:
- `index.html`
- `slides/` folder with all SVG files
- `netlify.toml` (configuration file - already created)

### Step 2: Deploy
1. **Open Netlify**: Go to https://app.netlify.com
2. **Sign up/Login**: Create a free account or log in
3. **Drag & Drop**: 
   - Open your file explorer
   - Navigate to `C:\Users\I762844\Documents\Slide Player`
   - Drag the **entire folder** onto the Netlify dashboard
   - Wait for upload (usually 10-30 seconds)
4. **Done!** Your site is live at `random-name.netlify.app`

### Step 3: Customize Site Name (Optional)
1. Click on your site in Netlify dashboard
2. Go to **Site settings** → **Change site name**
3. Enter a name like `svg-slide-player-demo`
4. Your new URL: `svg-slide-player-demo.netlify.app`

---

## Method 2: Git Integration (Recommended for Updates)

### Step 1: Create GitHub Repository
1. Go to https://github.com and sign in
2. Click **New repository**
3. Name it: `svg-slide-player-demo`
4. Make it **Public** (required for free hosting)
5. **Don't** initialize with README
6. Click **Create repository**

### Step 2: Push Your Code
Open PowerShell in your project folder and run:

```powershell
cd "C:\Users\I762844\Documents\Slide Player"

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SVG Slide Player Demo"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/svg-slide-player-demo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify
1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** and authorize Netlify
4. Select your repository: `svg-slide-player-demo`
5. Click **Deploy site**

### Step 4: Automatic Updates
- Every time you push to GitHub, Netlify will automatically redeploy
- No need to drag & drop again!

---

## Method 3: Netlify CLI (For Developers)

### Install Netlify CLI
```powershell
npm install -g netlify-cli
```

### Deploy
```powershell
cd "C:\Users\I762844\Documents\Slide Player"
netlify deploy --prod
```

Follow the prompts to authenticate and deploy.

---

## What Happens After Deployment?

✅ Your site will be live at: `your-site-name.netlify.app`
✅ HTTPS is automatic (secure connection)
✅ All slides will work perfectly
✅ BPM models will display correctly
✅ Editor and converter features will work

## Troubleshooting

**If slides don't load:**
- Check browser console (F12) for errors
- Verify all files in `slides/` folder are uploaded
- Make sure file paths in `index.html` are correct

**If you see "Page Not Found":**
- The `netlify.toml` file should handle this
- Check that `index.html` is in the root folder

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

---

**Recommended: Use Method 1 (Drag & Drop)** - It's the fastest and easiest!

