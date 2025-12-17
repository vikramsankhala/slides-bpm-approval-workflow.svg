# Slide Player - User Guide

## What is the Slide Player?

The Slide Player is a simple web application that lets you display a series of images (slides) one at a time, like a digital slideshow. You can navigate through slides manually or set them to play automatically.

Think of it like a PowerPoint presentation, but simpler and designed specifically for SVG image files.

## What You Need

1. **An `index.html` file** - This is the slide player itself
2. **SVG image files** - These are your slides (images saved in SVG format)
3. **A web browser** - Any modern browser (Chrome, Firefox, Edge, Safari)

## Getting Started

### Step 1: Prepare Your Slides

1. Create or obtain SVG image files for your slides
   - SVG is a type of image format (like JPG or PNG, but for vector graphics)
   - You can create SVGs using:
     - **AI assistants** (ChatGPT, Claude, Copilot, etc.) - See detailed guide below
     - Graphics tools like Inkscape (free), Adobe Illustrator, or Figma
     - Export from other graphics programs

2. Create a folder called `slides` in the same location as your `index.html` file

3. Put all your SVG slide files into the `slides` folder
   - Name them however you like (e.g., `slide1.svg`, `slide2.svg`, `intro.svg`, `conclusion.svg`)
   - Make sure they all end with `.svg`

#### Creating Slides Using AI

AI assistants (like ChatGPT, Claude, Copilot, or similar tools) can generate SVG code for your slides. This is a quick and easy way to create professional-looking slides without graphics software.

**Step-by-Step Process:**

1. **Open an AI assistant** (ChatGPT, Claude, Copilot, etc.)

2. **Provide a clear prompt** describing what you want on your slide. Include:
   - The slide's purpose or topic
   - What content should appear (title, text, images, diagrams, etc.)
   - Any specific style preferences (colors, layout, theme)
   - The slide dimensions (recommended: 800x600 or similar)

3. **Ask for SVG code** - Make sure to request the output as SVG code

4. **Copy the generated SVG code**

5. **Save it as an SVG file**:
   - Open a text editor (Notepad, VS Code, etc.)
   - Paste the SVG code
   - Save the file with a `.svg` extension (e.g., `slide1.svg`)
   - Make sure to save it in your `slides` folder

**Example Prompts:**

**Simple Title Slide:**
```
Create an SVG slide with:
- Title: "Welcome to My Presentation"
- Subtitle: "Introduction to the Topic"
- Dark background (#1a1a1a)
- White and light gray text
- Dimensions: 800x600
- Center-aligned text
- Professional, modern design
```

**Slide with Diagram:**
```
Create an SVG slide showing a simple flowchart with:
- Title: "Process Overview" at the top
- Three boxes connected by arrows: "Start" → "Process" → "End"
- Blue boxes with white text
- Dark background (#111)
- Dimensions: 800x600
```

**Slide with Chart/Graph:**
```
Create an SVG slide with:
- Title: "Sales Results Q1 2024"
- A simple bar chart showing 4 bars with values: 100, 150, 120, 180
- Labels below each bar: Jan, Feb, Mar, Apr
- Green bars on dark background
- White text
- Dimensions: 800x600
```

**Slide with Animated Elements:**
```
Create an SVG slide with:
- Title: "Key Points"
- Three bullet points that can be animated
- Add data-animate="true" to each element so they fade in
- Dark background, white text
- Dimensions: 800x600
```

**Tips for Better AI-Generated Slides:**

- **Be specific**: The more details you provide, the better the result
- **Request viewBox**: Ask the AI to include `viewBox="0 0 800 600"` for proper scaling
- **Specify colors**: Mention your preferred color scheme
- **Ask for animations**: Request `data-animate="true"` on elements you want animated
- **Iterate**: If the first result isn't perfect, ask for adjustments
- **Check the code**: Make sure the AI provides complete, valid SVG code

**What to Look for in the Generated SVG:**

The SVG code should:
- Start with `<svg viewBox="0 0 800 600"` (or similar dimensions)
- Include `xmlns="http://www.w3.org/2000/svg"` attribute
- End with `</svg>`
- Be complete and self-contained (no external references needed)

**Example of Good SVG Structure:**
```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#1a1a1a"/>
  
  <!-- Content here -->
  <text x="400" y="100" fill="#fff" font-size="48" 
        text-anchor="middle" data-animate="true">
    My Title
  </text>
</svg>
```

**Troubleshooting AI-Generated Slides:**

- **Slide doesn't display**: Check that the SVG code is complete and valid
- **Wrong size**: Make sure the `viewBox` attribute is included
- **Missing elements**: Ask the AI to regenerate with all elements included
- **Colors don't match**: Specify exact color codes (like `#1a1a1a` instead of "dark")
- **Text positioning**: Ask for centered text using `text-anchor="middle"` and `x="400"` (half of 800)

**Advanced: Creating Multiple Slides at Once**

You can ask the AI to create multiple slides in one request:

```
Create 3 SVG slides for a presentation about "Project Management":
1. Title slide: "Project Management Basics"
2. Content slide: "Key Principles" with 4 bullet points
3. Summary slide: "Next Steps" with 3 items

Each slide should be:
- 800x600 dimensions
- Dark background (#111)
- White text
- Include data-animate="true" on text elements
- Professional design
```

Then save each slide as a separate `.svg` file with descriptive names.

#### Using OpenAI (ChatGPT) for Slide Creation

OpenAI's ChatGPT is excellent for generating SVG code directly. Here's how to use it effectively:

**Best Practices for ChatGPT:**

1. **Be explicit about SVG format:**
   ```
   Create an SVG slide (not HTML, not an image description, but actual SVG code) with...
   ```

2. **Specify complete code:**
   ```
   Provide complete, self-contained SVG code that I can copy and paste directly into a file.
   ```

3. **Request proper structure:**
   ```
   Make sure the SVG includes:
   - viewBox="0 0 800 600"
   - xmlns="http://www.w3.org/2000/svg"
   - All elements properly closed
   ```

**Example ChatGPT Prompt:**
```
Create a complete SVG slide with the following specifications:
- Dimensions: 800x600 pixels
- Dark background (#1a1a1a)
- Title: "Quarterly Review 2024" in large white text, centered
- Three key metrics displayed as cards:
  1. Revenue: $2.5M (green)
  2. Growth: +15% (blue)
  3. Customers: 1,200 (orange)
- Each metric card should have data-animate="true" for animation
- Professional, modern design
- Provide complete SVG code I can save directly as a .svg file
```

**ChatGPT Tips:**
- Use GPT-4 for better code quality
- Ask for revisions: "Make the text larger" or "Change colors to match brand"
- Request specific layouts: "Use a grid layout" or "Center everything"
- Ask for accessibility: "Add proper text elements (not just shapes)"

#### Using DALL-E for Image-Based Slides

DALL-E (or other image generation AI) can create images that you can convert to SVG:

**Method 1: Convert DALL-E Images to SVG**

1. **Generate your image** in DALL-E:
   - Prompt: "A professional presentation slide with title 'Sales Overview' and a bar chart, dark background, modern design, 16:9 aspect ratio"

2. **Download the generated image**

3. **Convert to SVG** using one of these methods:
   - **Online converters**: Use tools like CloudConvert, Convertio, or Vectorizer.io
   - **Inkscape**: Import the image and use "Trace Bitmap" to convert to SVG
   - **Adobe Illustrator**: Open image and use "Image Trace" feature

4. **Optimize for your slide player**:
   - Open the SVG in a text editor
   - Ensure it has `viewBox="0 0 800 600"` (or adjust dimensions)
   - Add `data-animate="true"` to elements you want animated
   - Remove unnecessary code/complexity

**Method 2: Use DALL-E Concepts in SVG Code**

Ask ChatGPT to recreate DALL-E style visuals as SVG:
```
Create an SVG slide inspired by DALL-E image generation style:
- [Describe the DALL-E image you want]
- Convert this visual concept into clean SVG code
- Use vector shapes and paths, not raster images
- 800x600 dimensions
```

**DALL-E Prompt Examples:**
- "A minimalist infographic slide showing 5 steps in a process, dark theme, professional"
- "A data visualization slide with pie chart and key statistics, modern design, dark background"
- "A timeline slide showing project milestones, clean and professional"

#### Creating BPM (Business Process Modeling) Diagrams

BPM diagrams show business processes, workflows, and decision flows. Use AI to generate these as SVG:

**ChatGPT Prompt for BPM Diagrams:**
```
Create an SVG slide showing a Business Process Model (BPM) diagram with:
- Title: "Customer Onboarding Process"
- Use standard BPMN shapes:
  * Rectangles for processes/tasks
  * Diamonds for decision points
  * Circles for start/end events
  * Arrows showing flow direction
- Show the process: Start → Collect Info → Validate? (decision) → Yes: Create Account → End | No: Request More Info → Validate?
- Dark background (#111)
- Blue/cyan for processes, yellow for decisions
- White text
- Dimensions: 800x600
- Include data-animate="true" on each process step
```

**Common BPM Elements to Request:**

- **Start Event**: Circle with thin border
- **Process/Task**: Rounded rectangle
- **Decision**: Diamond shape
- **End Event**: Circle with thick border
- **Gateways**: Diamond with X or + symbol
- **Swimlanes**: Horizontal or vertical divisions for different roles/departments

**Advanced BPM Prompt:**
```
Create a complex BPMN 2.0 diagram in SVG showing:
- Title: "Order Fulfillment Process"
- Three swimlanes: Customer, Sales, Warehouse
- Start event → Order received → Check inventory (gateway) → 
  If available: Prepare shipment → Ship → End
  If not: Notify customer → End
- Use proper BPMN notation
- Color code by swimlane
- Dark background, professional colors
- 800x600 dimensions
- Animate each step as it appears
```

**BPM Tools Integration:**
- Generate BPM diagrams in tools like Lucidchart, Draw.io, or Bizagi
- Export as SVG
- Or describe the process to ChatGPT and get SVG code directly

#### Creating Infographic-Style Slides

Infographics combine data visualization, icons, and text in an engaging format:

**ChatGPT Prompt for Infographics:**
```
Create an infographic-style SVG slide with:
- Title: "Company Growth 2024" at the top
- Three main sections:
  1. Left: Icon + "500 Employees" (large number, small text)
  2. Center: Icon + "$10M Revenue" (large number, small text)
  3. Right: Icon + "50 Countries" (large number, small text)
- Use icons made from SVG shapes (circles, stars, globes)
- Colorful but professional (use brand colors if specified)
- Dark background (#1a1a1a)
- White/light text
- 800x600 dimensions
- Add data-animate="true" to each section for sequential animation
```

**Infographic Elements to Request:**

1. **Statistics/Key Metrics:**
   ```
   Show large numbers prominently with descriptive labels
   ```

2. **Icons and Symbols:**
   ```
   Create simple SVG icons using basic shapes (circles, rectangles, paths)
   ```

3. **Charts and Graphs:**
   ```
   Include bar charts, pie charts, or line graphs made with SVG shapes
   ```

4. **Timelines:**
   ```
   Create a horizontal or vertical timeline with milestones
   ```

5. **Comparison Tables:**
   ```
   Show before/after, pros/cons, or feature comparisons
   ```

**Complete Infographic Example Prompt:**
```
Create a comprehensive infographic SVG slide:
- Title: "Digital Transformation Impact"
- Top section: Three key stats in colored boxes (Revenue +25%, Efficiency +40%, Satisfaction +30%)
- Middle section: A simple flowchart showing: Current State → Transformation → Future State
- Bottom section: Four benefits listed with icons:
  * Faster processes (clock icon)
  * Better data (chart icon)
  * Cost savings (dollar icon)
  * Happy customers (smile icon)
- Use a cohesive color scheme (blues and greens)
- Dark background (#111)
- White text
- 800x600 dimensions
- All elements should have data-animate="true"
- Professional, modern design
```

**Infographic Design Tips:**
- **Use consistent colors**: Pick 2-3 main colors and stick with them
- **Hierarchy**: Make important numbers/text larger
- **Whitespace**: Don't overcrowd - leave breathing room
- **Icons**: Keep icons simple and recognizable
- **Flow**: Guide the eye from top to bottom or left to right

#### Combining Multiple AI Tools

You can combine different AI tools for best results:

**Workflow Example:**
1. **Use DALL-E** to generate visual concepts/inspiration
2. **Describe to ChatGPT** what you want based on DALL-E output
3. **Get SVG code** from ChatGPT
4. **Refine** by asking ChatGPT to adjust colors, sizes, or layout
5. **Add animations** by requesting `data-animate="true"` on specific elements

**Example Combined Workflow:**
```
1. DALL-E: "A modern business presentation slide with data visualization"
2. ChatGPT: "Create an SVG version of this concept: [describe DALL-E image]
   - Convert to clean SVG code
   - Make it 800x600
   - Add dark background
   - Include data-animate attributes"
3. Refine: "Make the chart colors more vibrant" or "Center the title"
```

#### Quick Reference: AI Tool Selection Guide

| **What You Need** | **Best AI Tool** | **Output Format** |
|-------------------|------------------|-------------------|
| Text-based slides | ChatGPT/Claude | SVG code directly |
| Complex diagrams | ChatGPT (describe process) | SVG code |
| Visual inspiration | DALL-E/Midjourney | Image → Convert to SVG |
| BPM workflows | ChatGPT (BPMN notation) | SVG code |
| Infographics | ChatGPT (describe layout) | SVG code |
| Data visualizations | ChatGPT (specify chart type) | SVG code |
| Icons/illustrations | DALL-E → Convert | SVG via converter |

**Pro Tip:** Always ask ChatGPT to "provide complete, self-contained SVG code" to avoid partial or incomplete outputs.

### Step 2: Generate Slides Using the Built-in AI Generator (NEW!)

The slide player now includes a **built-in AI Content Generator** that can create slides directly in the application!

**How to Use the AI Generator:**

1. **Open the slide player** in your browser (via web server)

2. **Click the "🤖 AI Generator" button** at the bottom of the screen

3. **Choose your method:**

   **Option A: Use OpenAI API (Recommended for best results)**
   - Get an API key from [OpenAI Platform](https://platform.openai.com/api-keys)
   - Enter your API key in the modal (it will be saved in your browser)
   - Enter a detailed prompt describing your slide
   - Click "Generate Slide"
   - The AI will create professional SVG code for you

   **Option B: Use Template-Based Generation (No API key needed)**
   - Select a slide type from the dropdown (Title, BPM, Infographic, Chart, Timeline, etc.)
   - Or click one of the quick template buttons
   - Enter your prompt or use the pre-filled template prompt
   - Click "Generate Slide"
   - A template-based slide will be generated

4. **Preview your slide** - The generated slide will appear in the preview area

5. **Download the slide**:
   - Enter a file name (without .svg extension)
   - Click "Download SVG"
   - The file will be saved to your Downloads folder

6. **Add to your presentation**:
   - Move the downloaded `.svg` file to your `slides` folder
   - Update the `slides` array in `index.html` to include the new file

**Quick Templates Available:**

- **Title Slide**: Professional title and subtitle slide
- **BPM Diagram**: Business Process Model with standard BPMN shapes
- **Infographic**: Statistics and key metrics with icons
- **Bar Chart**: Data visualization with bars and labels
- **Timeline**: Horizontal timeline with milestones

**Example Workflow:**

1. Click "🤖 AI Generator"
2. Click "BPM Diagram" template button (auto-fills prompt)
3. Modify the prompt if needed: "Change 'Process Flow' to 'Order Fulfillment'"
4. Enter file name: "order-process"
5. Click "Generate Slide"
6. Review preview
7. Click "Download SVG"
8. Move `order-process.svg` to `slides/` folder
9. Add `'slides/order-process.svg'` to the slides array in `index.html`

**Tips for Best Results:**

- **With OpenAI API**: Be specific and detailed in your prompts
- **Without API**: Use the template buttons for best results
- **File Names**: Use lowercase with hyphens (e.g., `my-slide`, not `My Slide`)
- **After Download**: Always move files to the `slides/` folder
- **Update Array**: Don't forget to add new slides to the `slides` array!

### Step 3: Tell the Player Which Slides to Show

1. Open the `index.html` file in a text editor (like Notepad, VS Code, or any code editor)

2. Find the section that looks like this:
   ```javascript
   const slides = [
     'slides/slide1.svg',
     'slides/slide2.svg',
     'slides/slide3.svg'
   ];
   ```

3. Replace the file names with your actual slide file names
   - Keep the `'slides/` part at the beginning
   - Use the exact name of your file (including `.svg`)
   - Add one line for each slide
   - Put quotes around each file path
   - Separate each line with a comma

**Example:**
If your slides are named `intro.svg`, `main-content.svg`, and `ending.svg`, you would write:
```javascript
const slides = [
  'slides/intro.svg',
  'slides/main-content.svg',
  'slides/ending.svg'
];
```

**If you used the AI Generator:**
After downloading slides from the AI Generator, add them to this array:
```javascript
const slides = [
  'slides/intro.svg',
  'slides/bpm-diagram.svg',        // Generated slide
  'slides/infographic.svg',        // Generated slide
  'slides/ending.svg'
];
```

### Step 4: View Your Slideshow

1. **Option A: Double-click `index.html`**
   - This will open it in your default web browser
   - Note: Some features might not work perfectly this way

2. **Option B: Use a local web server (Recommended)**
   - If you have Python installed, open a terminal/command prompt in the folder and run:
     - Windows: `python -m http.server`
     - Mac/Linux: `python3 -m http.server`
   - Then open your browser and go to: `http://localhost:8000`
   - Or use a simple web server tool

## How to Use the Player

### Display Features

**Full-Screen Display**
- Slides are displayed at full screen, filling your browser window
- The player uses a dark theme (black background) for optimal viewing
- Your SVG slides are centered and scaled to fit the screen
- The first slide automatically loads when you open the player

### Navigation Controls

At the bottom of the screen, you'll see four buttons:

#### **Prev (←) Button**
- **Function**: Go to the previous slide
- **Behavior**: 
  - Moves backward through your slides
  - **Loops**: If you're on the first slide, clicking "Prev" takes you to the last slide
  - Automatically stops auto-play if it's running
- **When disabled**: Never disabled (always available)

#### **Next (→) Button**
- **Function**: Go to the next slide
- **Behavior**:
  - Moves forward through your slides
  - **Does NOT loop**: If you're on the last slide, clicking "Next" does nothing (stays on last slide)
  - Automatically stops auto-play if it's running
- **When disabled**: Never disabled (always available)

#### **Play Button**
- **Function**: Start automatic playback
- **Behavior**:
  - Starts auto-play mode
  - Slides advance automatically every 6 seconds (default)
  - **Loops**: When reaching the last slide, automatically goes back to the first slide
  - Continues playing until you click "Pause" or use manual navigation
- **When disabled**: Disabled while auto-play is active
- **Status**: When active, the status display shows "Auto-play (every 6s)"

#### **Pause Button**
- **Function**: Stop automatic playback
- **Behavior**:
  - Stops auto-play immediately
  - Returns to manual navigation mode
  - Current slide remains displayed
- **When disabled**: Disabled when auto-play is not active
- **Status**: When paused, the status display shows "Manual mode"

### Keyboard Shortcuts

You can control the player entirely with your keyboard:

#### **Next Slide**
- **Right Arrow Key (→)**: Go to the next slide
- **Spacebar**: Go to the next slide
- **Behavior**:
  - Both keys work the same way
  - Moves forward one slide
  - **Does NOT loop**: Stops at the last slide
  - Automatically stops auto-play if it's running

#### **Previous Slide**
- **Left Arrow Key (←)**: Go to the previous slide
- **Behavior**:
  - Moves backward one slide
  - **Loops**: From the first slide, goes to the last slide
  - Automatically stops auto-play if it's running

**Note**: Keyboard shortcuts work anywhere on the page - you don't need to click on the player first.

### Status Display

Next to the control buttons, you'll see a status message that shows:

**In Manual Mode:**
- Format: `Manual mode — Slide X / Y`
- Example: `Manual mode — Slide 3 / 10`
- Shows current slide number and total slides

**In Auto-Play Mode:**
- Format: `Auto-play (every Xs) — Slide Y / Z`
- Example: `Auto-play (every 6s) — Slide 5 / 10`
- Shows auto-play is active, timing interval, current slide, and total slides

**Real-Time Updates:**
- The status updates immediately when you navigate
- Slide numbers update as you move through slides
- Mode indicator changes when you start/stop auto-play

### Auto-Play Feature

**How It Works:**
1. Click the **Play** button to start auto-play
2. Slides advance automatically every 6 seconds (default timing)
3. When reaching the last slide, it loops back to the first slide
4. Continues playing indefinitely until stopped

**Stopping Auto-Play:**
- Click the **Pause** button
- OR use any navigation button (Prev/Next)
- OR use any keyboard shortcut (arrow keys or spacebar)

**Customizing Auto-Play Speed:**
- Open `index.html` in a text editor
- Find the line: `const autoPlayDelay = 6000;`
- Change `6000` to your desired milliseconds:
  - `1000` = 1 second
  - `3000` = 3 seconds
  - `6000` = 6 seconds (default)
  - `10000` = 10 seconds
  - `15000` = 15 seconds
- Save the file and refresh your browser

**Auto-Play Behavior:**
- Auto-play loops continuously (last slide → first slide)
- Manual navigation always stops auto-play
- You can restart auto-play at any time
- The Play button is disabled while auto-play is active
- The Pause button is only enabled during auto-play

## Adding Animations to Your Slides (Optional)

The slide player includes built-in animation support for elements in your SVG slides. When a slide loads, marked elements will automatically animate.

### How Animations Work

**Animation Effect:**
- Elements fade in from invisible to visible
- Elements scale up from 80% to 100% size
- Animation duration: 0.6 seconds
- Smooth easing effect

**When Animations Trigger:**
- Every time a slide loads (including when navigating)
- Animations restart each time you return to a slide
- Works in both manual and auto-play modes

### How to Add Animations

1. **Open your SVG file** in a text editor (like Notepad, VS Code, etc.)

2. **Find the element** you want to animate (text, shapes, circles, rectangles, etc.)

3. **Add the attribute** `data-animate="true"` to that element

**Example - Animating Text:**

Before:
```svg
<text x="400" y="100" fill="#fff" font-size="48">
  My Title
</text>
```

After:
```svg
<text x="400" y="100" fill="#fff" font-size="48" data-animate="true">
  My Title
</text>
```

**Example - Animating Shapes:**

Before:
```svg
<circle cx="200" cy="300" r="40" fill="orange" />
<rect x="100" y="200" width="150" height="80" fill="blue" />
```

After:
```svg
<circle cx="200" cy="300" r="40" fill="orange" data-animate="true" />
<rect x="100" y="200" width="150" height="80" fill="blue" data-animate="true" />
```

**Example - Multiple Animated Elements:**

You can animate multiple elements on the same slide:
```svg
<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#1a1a1a"/>
  
  <!-- This title will animate -->
  <text x="400" y="100" fill="#fff" font-size="48" 
        text-anchor="middle" data-animate="true">
    Welcome
  </text>
  
  <!-- This subtitle will also animate -->
  <text x="400" y="200" fill="#ccc" font-size="24" 
        text-anchor="middle" data-animate="true">
    Introduction to the Topic
  </text>
  
  <!-- This circle will animate -->
  <circle cx="400" cy="400" r="50" fill="orange" data-animate="true" />
</svg>
```

### Animation Tips

- **Selective Animation**: Only add `data-animate="true"` to elements you want animated
- **Background Elements**: Usually don't animate backgrounds - animate content instead
- **Timing**: All animated elements on a slide start animating simultaneously when the slide loads
- **Re-animation**: Animations restart every time you navigate to a slide (useful for presentations)
- **Performance**: Animating many elements at once is fine, but very complex SVGs might be slower

### Elements That Can Be Animated

You can add `data-animate="true"` to any SVG element:
- `<text>` - Text elements
- `<circle>` - Circles
- `<rect>` - Rectangles
- `<ellipse>` - Ellipses
- `<line>` - Lines
- `<path>` - Complex paths
- `<polygon>` - Polygons
- `<polyline>` - Polylines
- `<g>` - Groups (animates the entire group)
- Any other SVG element

## Tips and Troubleshooting

### My slides aren't showing up

- Check that your file names in the `slides` array match exactly (including capitalization)
- Make sure your SVG files are in the `slides` folder
- Verify the file paths start with `'slides/` and end with `.svg'`
- Make sure you're viewing through a web server (not just double-clicking the HTML file)

### The player looks broken

- Make sure you're using a modern web browser
- Try refreshing the page (F5)
- Check that your `index.html` file wasn't accidentally modified incorrectly

### I want to change the auto-play speed

- Open `index.html` in a text editor
- Find the line: `const autoPlayDelay = 6000;`
- Change `6000` to the number of milliseconds you want (1000 = 1 second)
  - Example: `3000` = 3 seconds, `10000` = 10 seconds

### I want to add more slides

1. Add your new SVG file to the `slides` folder
2. Add a new line in the `slides` array in `index.html`
3. Make sure to add a comma after the previous line
4. Refresh your browser

### My SVG files are too large or too small

- The player displays SVGs at full screen
- If your SVG has a `viewBox` attribute, it will scale properly
- You may need to adjust the `viewBox` in your SVG file to fit your content

## Common Questions

**Q: Can I use JPG or PNG images instead of SVG?**  
A: No, this player is designed specifically for SVG files. You can convert images to SVG using tools like Inkscape or online converters.

**Q: Can I change the colors or style of the player?**  
A: Yes! The player uses CSS styling. You can modify the colors, fonts, and layout by editing the `<style>` section in `index.html`.

**Q: How many slides can I have?**  
A: As many as you want! There's no limit, but very large numbers might slow down loading.

**Q: Can I share this with others?**  
A: Yes! You can upload all the files to a web hosting service (like GitHub Pages, Netlify, or any web server) and share the link.

**Q: Do I need internet to use this?**  
A: No! Once you have the files, everything works offline. You only need internet if you're hosting it online for others to access.

## Complete Feature List

Here's a summary of all available features:

### Navigation Features
- ✅ Previous slide button (with looping)
- ✅ Next slide button (stops at last slide)
- ✅ Left arrow key (previous, with looping)
- ✅ Right arrow key (next, stops at last slide)
- ✅ Spacebar (next, stops at last slide)
- ✅ Auto-play mode (automatic slide advancement)
- ✅ Play/Pause controls
- ✅ Configurable auto-play timing

### AI Generation Features
- ✅ Built-in AI Content Generator
- ✅ OpenAI API integration (with API key)
- ✅ Template-based generation (no API key needed)
- ✅ Quick templates for common slide types
- ✅ BPM diagram generator
- ✅ Infographic generator
- ✅ Chart/graph generator
- ✅ Timeline generator
- ✅ Preview before download
- ✅ One-click SVG download

### Display Features
- ✅ Full-screen slide display
- ✅ Dark theme interface
- ✅ Centered slide presentation
- ✅ Automatic first slide loading
- ✅ Real-time status display
- ✅ Slide counter (current/total)

### Animation Features
- ✅ Built-in fade-in animations
- ✅ Scale-up animations
- ✅ Per-element animation control
- ✅ Automatic animation restart on slide load
- ✅ Works with all SVG element types

### User Experience Features
- ✅ Keyboard shortcuts (no mouse required)
- ✅ Auto-play stops on manual navigation
- ✅ Status messages for current mode
- ✅ Button state management (disabled when not applicable)
- ✅ Smooth transitions between slides

## Summary

1. **Create SVG slides** → Put them in a `slides` folder
2. **List them in `index.html`** → Update the `slides` array
3. **Open in browser** → Use a web server for best results
4. **Navigate** → Use buttons or keyboard shortcuts
5. **Auto-play** → Click Play for automatic advancement
6. **Optional** → Add `data-animate="true"` to elements you want animated

That's it! You're ready to create and view your slideshow with all available features.
