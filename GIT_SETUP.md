# Git Setup for Netlify Deployment

## Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** or create an account (free)
3. **Click the "+" icon** in the top right → **New repository**
4. **Repository name**: `svg-slide-player-demo` (or any name you prefer)
5. **Description**: "SVG Slide Player with BPM Modelling - Demo Version"
6. **Visibility**: Choose **Public** (required for free Netlify hosting)
7. **DO NOT** check "Initialize with README" (we already have files)
8. **Click "Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Make sure you're in the project directory
cd "C:\Users\I762844\Documents\Slide Player"

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/svg-slide-player-demo.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note**: You'll be prompted for your GitHub username and password/token.

### If you get authentication errors:

GitHub no longer accepts passwords. You need a **Personal Access Token**:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Netlify Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

## Step 3: Connect to Netlify

1. **Go to Netlify**: https://app.netlify.com
2. **Sign in** or create account (free)
3. **Click "Add new site"** → **"Import an existing project"**
4. **Click "GitHub"** and authorize Netlify
5. **Select your repository**: `svg-slide-player-demo`
6. **Build settings**:
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (root directory)
7. **Click "Deploy site"**

## Step 4: Configure Netlify (Optional but Recommended)

After deployment:

1. **Click on your site** in Netlify dashboard
2. **Site settings** → **Change site name**
   - Enter: `svg-slide-player-demo` (or your preferred name)
   - Your URL: `svg-slide-player-demo.netlify.app`

3. **Site settings** → **Build & deploy** → **Deploy contexts**
   - Production branch: `main`
   - Branch deploys: All branches (optional)

## Step 5: Automatic Updates

Now, every time you make changes:

```powershell
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Description of changes"
git push
```

Netlify will **automatically detect** the push and redeploy your site!

## Troubleshooting

### "Repository not found"
- Make sure the repository name matches exactly
- Check that the repository is Public (or you have Netlify Pro)

### "Authentication failed"
- Use Personal Access Token instead of password
- Make sure token has `repo` scope

### "Build failed"
- Check Netlify build logs
- Make sure `netlify.toml` is in the root
- Verify all files are committed to Git

### Files not updating
- Check that files are committed: `git status`
- Verify push was successful: `git log`
- Check Netlify deploy logs for errors

## Quick Reference Commands

```powershell
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# View commit history
git log --oneline

# Check remote connection
git remote -v
```

## Your Site Will Be Live At:

After deployment: `https://your-site-name.netlify.app`

All features will work:
- ✅ Demo slides
- ✅ BPM models
- ✅ Editor
- ✅ Converter
- ✅ Animations

