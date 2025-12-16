# SVG Slide Player - Demo Version

A static, web-hostable slide player that displays SVG slides with CSS animations. Perfect for presentations created with TikZ, Asymptote, or pure SVG.

**This is a demo version** with pre-loaded example slides and BPM models to showcase all features.

## Features

- **Play/Pause**: Auto-play slides with customizable timing
- **Keyboard Navigation**: Use arrow keys or spacebar to navigate
- **CSS Animations**: Elements marked with `data-animate="true"` animate when slides appear
- **PowerPoint Converter**: Convert PowerPoint (.pptx) files to SVG slides directly in the browser
- **Visual SVG Editor**: Create and edit SVG slides with a full-featured visual editor
- **Business Process Modelling (BPM)**: Create BPMN diagrams with specialized shapes and connectors
- **AI Content Generation**: Generate slides, templates, and BPM diagrams using AI prompts (OpenAI)
- **Static Hosting**: Works on any static web host (GitHub Pages, Netlify, S3, etc.)
- **Minimal Dependencies**: Uses JSZip (via CDN) for PPTX conversion

## Quick Start

1. **Open the player**: Simply open `index.html` in a web browser
   - For local development, you may need to serve it via a local server (e.g., `python -m http.server` or `npx serve`)
   - **Note**: Due to browser security, you may need a local server to load SVG files properly

2. **Demo Content**: The demo includes:
   - **3 Demo Slides**: Welcome, Features, and Getting Started slides
   - **3 BPM Models**: Order Processing, Customer Onboarding, and Approval Workflow diagrams
   - All slides include animations and demonstrate various features

3. **Add your slides**: 
   - **Option A**: Place SVG files in the `slides/` directory and update the slide list in `index.html`
   - **Option B**: Use the built-in converter to upload PowerPoint (.pptx) files
   - **Option C**: Use the visual editor to create slides from scratch
   - **Option D**: Edit existing demo slides using the "Edit Current" button

```javascript
// Slides array (can be modified dynamically via converter)
let slides = [
  'slides/slide1.svg',
  'slides/slide2.svg',
  'slides/slide3.svg',
  // Add more slides here or use the converter
];
```

## Creating Animated SVG Slides

To make elements animate when a slide appears, add `data-animate="true"` to any SVG element:

```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#111"/>
  <text x="400" y="300" fill="#fff" font-size="32"
        data-animate="true">
    This text will animate in
  </text>
  <circle cx="400" cy="400" r="50" fill="orange"
          data-animate="true" />
</svg>
```

Elements with `data-animate="true"` will fade in and scale up when the slide loads.

## Controls

- **Prev (←)**: Go to previous slide
- **Play**: Start auto-play (6 seconds per slide)
- **Pause**: Stop auto-play
- **Next (→)**: Go to next slide
- **Convert PPTX**: Open converter to upload and convert PowerPoint files
- **New Slide**: Create a new SVG slide from scratch
- **Edit Current**: Edit the currently displayed slide (including BPM slides)
- **Arrow Left**: Previous slide
- **Arrow Right / Spacebar**: Next slide

## PowerPoint to SVG Converter

Convert PowerPoint presentations directly in your browser:

1. Click the **"Convert PPTX"** button in the controls
2. Upload a `.pptx` file (drag & drop or click to select)
3. The converter will extract slides and convert them to SVG format
4. Converted slides are automatically added to the player

### How It Works

- Extracts slide content from PPTX files (which are ZIP archives)
- Converts text, shapes, and basic elements to SVG format
- Preserves text formatting (font size, color, weight)
- Automatically marks elements with `data-animate="true"` for animations
- Converts slides in order and adds them to your presentation

### Limitations

- Complex PowerPoint features (animations, transitions, embedded media) are not converted
- Images embedded in slides may not be preserved
- Advanced formatting and effects may be simplified
- Best results with simple text-and-shape presentations

For best results, use PowerPoint slides with:
- Text boxes
- Basic shapes (rectangles, circles, etc.)
- Simple formatting

## SVG Visual Editor

Create and edit SVG slides directly in your browser with a full-featured visual editor:

1. Click the **"Edit SVG"** button in the controls
2. Use the toolbar to select drawing tools
3. Click and drag on the canvas to create shapes
4. Select elements to edit their properties
5. Click "Save & Add" to add your slide to the presentation

### Drawing Tools

- **Select (S)**: Select and move elements
- **Text (T)**: Add text elements (double-click to edit)
- **Rectangle (R)**: Draw rectangles
- **Circle (C)**: Draw circles
- **Ellipse (E)**: Draw ellipses
- **Line (L)**: Draw lines
- **Delete**: Remove selected element
- **Animate**: Toggle animation on selected element

### Property Panel

When an element is selected, you can edit:
- **Position**: X, Y coordinates
- **Size**: Width, height, radius (depending on element type)
- **Colors**: Fill and stroke colors
- **Styling**: Stroke width, font size, font family
- **Animation**: Toggle `data-animate="true"` attribute

### Keyboard Shortcuts (in Editor)

- **S**: Select tool
- **T**: Text tool
- **R**: Rectangle tool
- **C**: Circle tool
- **E**: Ellipse tool
- **L**: Line tool
- **Delete/Backspace**: Delete selected element

### Tips

- Elements are created with default colors and can be customized via the property panel
- Text elements can be edited by clicking on them
- Use the "Animate" button or checkbox to enable animations on elements
- The editor uses a 960x720 viewBox (standard presentation size)

## Business Process Modelling (BPM)

Create professional business process diagrams using BPMN (Business Process Model and Notation) shapes:

**Creating a New BPM Slide:**
1. Click **"New Slide"** to open the editor
2. Switch to **"BPM"** mode using the toggle in the editor header
3. Select shapes from the BPM palette on the left
4. Click on the canvas to place shapes
5. Use the **Connector** tool to link elements together
6. Click elements to edit their labels and properties
7. Click **"Save & Add"** to save your BPM diagram as a slide

**Editing an Existing BPM Slide:**
1. Navigate to the BPM slide you want to edit using the navigation controls
2. Click **"Edit Current"** button
3. The editor will automatically detect if it's a BPM slide and switch to BPM mode
4. Make your changes (add/remove elements, edit labels, modify connectors, etc.)
5. Click **"Save & Add"** to save changes (this replaces the existing slide)

### BPMN Shapes Available

- **Start Event** (Blue Circle): Beginning of a process
- **End Event** (Red Circle): End of a process
- **Process** (Green Rectangle): Activity or task
- **Decision** (Orange Diamond): Decision point or gateway
- **Sub-Process** (Purple Rounded Rectangle): Sub-process or nested activity
- **Data Object** (Cyan Parallelogram): Data input/output
- **Connector** (Arrow): Flow between elements

### Creating Connections

1. Select the **Connector** tool from the toolbar or palette
2. Click on a BPM element to start the connection
3. Drag to another BPM element and click to complete
4. Connections automatically snap to element centers

### Editing BPM Elements

- **Labels**: Click on text labels to edit them
- **Properties**: Select any element to edit its properties in the right panel
- **Animation**: Toggle animation on elements for slide presentations
- **Deletion**: Select and delete elements (connectors are automatically removed)

### BPM Mode Features

- Specialized BPMN shapes with standard colors
- Automatic connector routing between elements
- Editable labels on all shapes
- Clean, professional appearance suitable for business documentation
- Export as SVG slides for presentations

## AI Content Generation

Generate slides, templates, and BPM diagrams using AI-powered prompts powered by OpenAI:

1. Click the **"AI Generate"** button (purple button in controls)
2. Select generation type:
   - **Slide Content**: Generate presentation slides from text prompts
   - **BPM Diagram**: Create BPMN diagrams from process descriptions
   - **BPM Slide (Animated)**: Create complete animated BPMN slides with titles
   - **SVG Graphics**: Generate standalone graphics, icons, and illustrations
   - **SVG Infographic**: Create data-rich infographics with charts and visualizations
   - **Template**: Generate reusable slide templates
3. Enter your prompt (e.g., "Create a slide about machine learning" or "Generate a BPM diagram for order processing")
4. Click **"Generate"** and wait for AI to create your content
5. Generated slides are automatically added to your presentation

### Example Prompts

**Slide Content:**
- "Create a slide about artificial intelligence with a title, 3 key points, and an illustration"
- "Make a slide explaining cloud computing benefits"
- "Generate a slide about project management best practices"

**BPM Diagrams:**
- "Generate a BPM diagram for customer order processing workflow"
- "Create a BPMN diagram for employee onboarding process"
- "Make a BPM diagram for invoice approval process"

**BPM Slides (Animated):**
- "Create an animated BPM slide for order fulfillment process"
- "Generate a BPM slide with title for customer service workflow"

**SVG Graphics:**
- "Create a machine learning icon with neural network visualization"
- "Generate a cloud computing graphic with servers and network"
- "Make a data analytics illustration with charts"

**SVG Infographics:**
- "Create an infographic about global population statistics"
- "Generate an infographic showing company growth metrics"
- "Make an infographic comparing renewable energy sources"

**Templates:**
- "Create a professional slide template for business presentations"
- "Generate a modern template with title and content areas"
- "Design a colorful template for educational slides"

### Configuration

API key is stored in `config.js`. **Important Security Notes:**
- For production, use environment variables or a secure backend proxy
- Never expose API keys in client-side code for public repositories
- Consider implementing a backend API proxy to keep keys secure
- The current implementation works for demos but should be secured for production

### How It Works

- Uses OpenAI's GPT-4 model to generate SVG code
- AI understands BPMN notation and slide design principles
- Generated content includes proper SVG structure and animations
- Content is immediately usable in the slide player

## Using TikZ or Asymptote

1. Author your slides in TikZ or Asymptote
2. Compile to SVG:
   - **TikZ**: Use `pdflatex` + `dvisvgm` or `pdftocairo -svg`
   - **Asymptote**: Use `asy -f svg yourfile.asy`
3. Place the generated SVGs in the `slides/` directory
4. Update the slide list in `index.html`

## Customization

### Change Auto-play Delay

Edit the `autoPlayDelay` constant in `index.html`:

```javascript
const autoPlayDelay = 6000; // Change to your desired milliseconds
```

### Custom Animations

Modify the CSS animation in `index.html`:

```css
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
```

### Slide Dimensions

Adjust the `viewBox` in your SVG files to match your desired aspect ratio. The player will scale slides to fit the viewport.

## Deployment

This is a fully static site. Deploy for FREE to:

1. **Netlify** (Recommended - Easiest): 
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Done! Your site is live in seconds
   - See `DEPLOY.md` for detailed instructions

2. **GitHub Pages**: 
   - Push to a GitHub repository
   - Enable Pages in repository settings
   - Free hosting at `your-username.github.io/repo-name`

3. **Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import project or drag & drop
   - Automatic deployments

4. **Cloudflare Pages**: 
   - Free, fast CDN
   - Connect Git or upload files

All these services offer:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ No server configuration needed

## File Structure

```
.
├── index.html                    # Main slide player
├── slides/                       # SVG slide files
│   ├── demo-welcome.svg         # Welcome slide
│   ├── demo-features.svg        # Features showcase
│   ├── demo-getting-started.svg # Getting started guide
│   ├── bpm-order-process.svg    # Order processing BPM diagram
│   ├── bpm-customer-onboarding.svg # Customer onboarding BPM
│   └── bpm-approval-workflow.svg    # Approval workflow BPM
└── README.md                     # This file
```

## Demo Slides Included

### Standard Slides
1. **Welcome Slide** - Introduction to SVG Slide Player
2. **Features Slide** - Showcase of key features with animated cards
3. **Getting Started** - Step-by-step guide with visual flow

### BPM Models
1. **Order Processing Workflow** - Complete order fulfillment process with decision points
2. **Customer Onboarding Process** - Multi-step customer onboarding with validation
3. **Document Approval Workflow** - Multi-level approval process with rejection paths

All demo slides are fully editable - use the "Edit Current" button to modify them!

## Browser Compatibility

Works in all modern browsers that support:
- SVG `<object>` elements
- CSS animations
- ES6 JavaScript

Tested in Chrome, Firefox, Safari, and Edge.

