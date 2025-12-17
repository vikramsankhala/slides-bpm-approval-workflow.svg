# Netlify Deployment Guide

## Quick Deploy

1. **Go to [Netlify](https://www.netlify.com/)** and sign in
2. **Click "Add new site" → "Import an existing project"**
3. **Connect to GitHub** and select your repository: `vikramsankhala/slides-bpm-approval-workflow.svg`
4. **Configure build settings:**
   - Build command: (leave empty - static site)
   - Publish directory: `.` (root directory)
5. **Add Environment Variable:**
   - Go to Site settings → Environment variables
   - Add variable: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (starts with `sk-proj-...`)
   - **Important**: Keep this key secure and never commit it to git
6. **Click "Deploy site"**

## Environment Variable Setup

Since this is a static site, the API key needs to be injected at build time. The `netlify.toml` file is already configured.

### Option 1: Netlify Dashboard (Recommended)

1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Click **Add a variable**
3. Key: `OPENAI_API_KEY`
4. Value: Your OpenAI API key
5. Scope: **All scopes** (or specific to production)
6. Click **Save**

### Option 2: Netlify CLI

```bash
netlify env:set OPENAI_API_KEY "sk-proj-..."
```

## Build Script (Optional)

If you need to inject the API key at build time, create a `build.sh` script:

```bash
#!/bin/bash
# Replace API key placeholder in index.html
sed -i "s|const DEFAULT_API_KEY = window.OPENAI_API_KEY || '';|const DEFAULT_API_KEY = window.OPENAI_API_KEY || '$OPENAI_API_KEY';|g" index.html
```

Then update `netlify.toml`:
```toml
[build]
  command = "bash build.sh"
  publish = "."
```

## Post-Deployment

After deployment:
1. Your site will be available at `https://your-site-name.netlify.app`
2. The AI Generator will work automatically with the environment variable
3. Users can still override the API key in the UI if needed

## Troubleshooting

- **API key not working**: Check that the environment variable is set correctly in Netlify dashboard
- **Build fails**: Ensure `netlify.toml` is in the root directory
- **CORS errors**: Netlify handles CORS automatically for static sites

## Custom Domain (Optional)

1. Go to **Domain settings** in Netlify
2. Click **Add custom domain**
3. Follow the DNS configuration instructions
