# How the Slide Player Works

## Overview

The slide player is a **static HTML/JavaScript application** that displays SVG slides one at a time, with navigation controls and optional animations.

## Input Format

### Primary Input: SVG Files

The slide player expects **SVG files** as input. Each slide is a separate SVG file stored in a `/slides/` directory.

**Example file structure:**
```
/
├── index.html          (the slide player)
└── slides/
    ├── slide1.svg
    ├── slide2.svg
    └── slide3.svg
```

### How Slides are Defined

In the `index.html` file, there's a JavaScript array that lists all the slide files:

```javascript
const slides = [
  'slides/slide1.svg',
  'slides/slide2.svg',
  'slides/slide3.svg'
];
```

**To add more slides:**
1. Create new SVG files in the `/slides/` directory
2. Add their paths to the `slides` array in `index.html`

## How It Works

### 1. **Loading Slides**
- The player uses an HTML `<object>` element to load external SVG files
- When you navigate to a slide, it sets `frame.data = slides[current]` to load the SVG
- The SVG is displayed full-screen in the player

### 2. **Navigation**
- **Previous/Next buttons**: Click to move between slides
- **Keyboard shortcuts**: 
  - `→` or `Space`: Next slide
  - `←`: Previous slide
- **Auto-play**: Click "Play" to automatically advance slides every 6 seconds

### 3. **Animations** (Optional)

If you want elements in your SVG slides to animate when the slide appears:

**In your SVG file**, mark elements with `data-animate="true"`:

```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#111"/>
  
  <!-- This text will animate when slide loads -->
  <text x="50" y="100" fill="#fff" font-size="32"
        data-animate="true">
    Hello, animated world
  </text>
  
  <!-- This circle will also animate -->
  <circle cx="200" cy="300" r="40" fill="orange"
          data-animate="true" />
</svg>
```

When a slide loads, the player automatically:
- Finds all elements with `data-animate="true"`
- Applies a CSS fade-in + scale animation to them

## Creating SVG Slides

You can create SVG slides in several ways:

### Option 1: Direct SVG Authoring
- Write SVG code directly in a text editor
- Save as `.svg` files

### Option 2: Export from Graphics Tools
- Use tools like Inkscape, Adobe Illustrator, or Figma
- Export as SVG format

### Option 3: Generate from Code (TikZ/Asymptote)
- Write slides in TikZ (LaTeX) or Asymptote
- Compile to SVG using build tools
- Place the generated SVGs in `/slides/`

## Requirements

- **Static web server**: The player can be hosted on any static hosting service:
  - GitHub Pages
  - Netlify
  - AWS S3 + CloudFront
  - Any HTTP server
- **No backend needed**: Everything runs in the browser
- **No dependencies**: Pure HTML, CSS, and JavaScript (no frameworks or libraries)

## Quick Start

1. **Create your SVG slides** and place them in a `slides/` folder
2. **Update the slides array** in `index.html`:
   ```javascript
   const slides = [
     'slides/your-slide-1.svg',
     'slides/your-slide-2.svg',
     'slides/your-slide-3.svg'
   ];
   ```
3. **Open `index.html`** in a web browser (or serve via HTTP server)
4. **Navigate** using buttons or keyboard shortcuts

## Example SVG Slide

Here's a minimal example of what a slide SVG might look like:

```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#1a1a1a"/>
  
  <!-- Title (will animate if data-animate="true") -->
  <text x="400" y="100" 
        fill="#fff" 
        font-size="48" 
        text-anchor="middle"
        font-family="Arial, sans-serif"
        data-animate="true">
    Slide Title
  </text>
  
  <!-- Content -->
  <text x="400" y="300" 
        fill="#ccc" 
        font-size="24" 
        text-anchor="middle"
        data-animate="true">
    Your content here
  </text>
</svg>
```

---

**Summary**: The slide player takes SVG files as input, displays them one at a time, and optionally animates elements marked with `data-animate="true"`. It's a simple, static web application with no external dependencies.
