# SVG Slide Player

A simple, elegant web-based slide player for displaying SVG presentations with built-in AI content generation.

## Features

- 🎨 Display SVG slides in full-screen mode
- ⌨️ Keyboard navigation (arrow keys, spacebar)
- ▶️ Auto-play with configurable timing
- ✨ Built-in animations for SVG elements
- 🤖 AI Content Generator with OpenAI integration
- 📊 Templates for BPM diagrams, infographics, charts, and more

## Quick Start

1. **Create your slides** as SVG files in the `slides/` folder
2. **Update the slides array** in `index.html`:
   ```javascript
   const slides = [
     'slides/slide1.svg',
     'slides/slide2.svg',
     'slides/slide3.svg'
   ];
   ```
3. **Open `index.html`** in a web browser (or serve via web server)

## Using the AI Generator

Click the "🤖 AI Generator" button to:
- Generate slides using AI prompts
- Create BPM diagrams, infographics, charts, and timelines
- Download generated SVG files instantly

## Documentation

- See `USER_GUIDE.md` for detailed user instructions
- See `HOW_IT_WORKS.md` for technical details

## Deployment

This application can be deployed to any static hosting service:
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Enable in repository settings
- **Vercel**: Import repository
- **Any static web server**

## License

MIT License - feel free to use and modify as needed.
