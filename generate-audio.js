// Script to generate audio files using OpenAI TTS API
// Run with: node generate-audio.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Get API key from environment variable
// Set it with: set OPENAI_API_KEY=your-key-here (Windows) or export OPENAI_API_KEY=your-key-here (Mac/Linux)
const API_KEY = process.env.OPENAI_API_KEY || '';

const narrations = [
  "Welcome to the SVG Slide Player. This is a professional presentation tool designed specifically for SVG image files. Think of it like PowerPoint, but simpler and more elegant. Unlike PowerPoint, this application is web-based, requires no installation, focuses exclusively on SVG graphics, and offers a streamlined interface without the complexity of traditional presentation software. It's perfect for showcasing vector graphics, diagrams, and illustrations in a clean, distraction-free environment. The SVG Slide Player eliminates the need for heavy software installations and complex setup procedures. Simply open it in your web browser, and you're ready to present. Whether you're a designer showcasing your work, a developer explaining technical concepts, or a business professional presenting data visualizations, this tool provides a focused and elegant solution. The application runs entirely in your browser, meaning you can access your presentations from any device, anywhere, without worrying about software compatibility or version mismatches. This makes it ideal for remote presentations, client meetings, and collaborative work sessions where simplicity and reliability are paramount.",
  "The Slide Player is a simple web application that displays a series of SVG images one at a time, like a digital slideshow. You can navigate through slides manually or set them to play automatically. The core functionality revolves around presenting your SVG files in a sequential manner, allowing you to tell a story or explain concepts step by step. Each slide appears full-screen, giving your content maximum visibility and impact. The player supports both manual navigation, where you control when to move forward or backward, and automatic playback, where slides advance automatically based on audio narration timing. This dual-mode approach gives you flexibility depending on your presentation style and audience needs. Manual mode is perfect for interactive presentations where you want to pause for questions or discussion, while automatic mode works great for recorded presentations or when you want a hands-free experience. The application remembers your position, so you can easily jump to any slide or restart from the beginning as needed.",
  "SVG stands for Scalable Vector Graphics. It's a type of image format, like JPG or PNG, but designed for vector graphics. Unlike raster images, SVG files scale perfectly at any size and can be edited as code. You can create SVGs using tools like Inkscape, Adobe Illustrator, or Figma. The key advantage of SVG is its scalability - you can zoom in infinitely without losing quality, making it perfect for presentations that might be viewed on different screen sizes or projected at various resolutions. SVG files are actually XML-based text files, which means they can be edited with any text editor, version controlled with Git, and even generated programmatically. This makes SVG ideal for technical diagrams, flowcharts, organizational charts, and any graphics that need to be precise and scalable. Because SVG is a web standard, it's supported by all modern browsers and integrates seamlessly with web technologies. You can style SVG elements with CSS, animate them with JavaScript, and even make them interactive. This flexibility makes SVG the perfect format for modern digital presentations where you want professional-quality graphics that work everywhere.",
  "At the bottom of the screen, you'll see control buttons. Prev moves to the previous slide, Play starts automatic playback, Pause stops it, and Next moves to the next slide. You can also use keyboard shortcuts: Right Arrow or Spacebar for next, Left Arrow for previous. The status display shows which slide you're viewing. These controls are designed to be intuitive and accessible. The Prev and Next buttons allow you to navigate manually through your presentation at your own pace, perfect for when you want to spend more time on certain slides or skip ahead to specific content. The Play button initiates automatic playback mode, where slides advance automatically based on the audio narration timing, creating a smooth, professional presentation experience. When you click Pause, the automatic playback stops, giving you full control again. Keyboard shortcuts make navigation even faster - simply press the Right Arrow key or Spacebar to move forward, and the Left Arrow key to go back. This is especially useful during live presentations when you want to navigate without moving your mouse. The status display in the center shows your current position, displaying both the current slide number and the total number of slides, so you always know where you are in your presentation.",
  "The AI Content Generator lets you create professional slides instantly. Click the AI Generator button to access templates for BPM diagrams, infographics, charts, timelines, and more. Generate slides using AI prompts and download them instantly. This powerful feature eliminates the need for design skills or expensive software. Simply describe what you want, and the AI creates a professional SVG slide for you. The generator supports multiple template types, each optimized for different use cases. BPM diagrams are perfect for business process modeling, showing workflows, decision points, and process flows. Infographics help you present data and information in a visually appealing way. Charts are ideal for displaying numerical data and comparisons. Timelines work great for showing sequences of events or project milestones. Title slides help you create professional opening slides for your presentations. Each template is designed with best practices in mind, ensuring your generated slides look professional and polished. The AI understands context and creates appropriate layouts, color schemes, and typography based on your description. You can generate multiple variations and choose the one that best fits your needs. Once generated, slides can be customized further by editing the SVG code directly, giving you complete control over the final appearance.",
  "Step 1: Open the AI Generator. Click the blue AI Generator button at the bottom of the screen. A modal window will open with generation options, allowing you to select templates or enter custom prompts. The AI Generator button is prominently displayed in the control bar, making it easy to access whenever you need to create new content. When you click it, a modal dialog appears that provides a clean, focused interface for slide generation. The modal is designed to be user-friendly, with clear labels and helpful placeholders that guide you through the process. You'll see options for selecting different slide types, entering your custom prompt, and specifying a file name for the generated slide. The interface also includes template buttons that let you quickly start with pre-configured slide types, or you can enter your own custom description for more specific needs. The modal stays open while you work, allowing you to generate multiple slides in succession without having to reopen it each time. This workflow efficiency makes it easy to build an entire presentation quickly, generating slides one after another as you develop your content ideas.",
  "Step 2: Choose a template or enter a custom prompt. Quick templates are available for Title Slides, BPM Diagrams, Infographics, Bar Charts, and Timelines. Click a template button for quick start, or type your own description for custom slides. The template buttons provide instant access to common slide types, each pre-configured with appropriate layouts and styling. When you click a template button, it automatically fills in a suggested prompt that you can then customize or use as-is. This saves time and ensures you're using the right terminology for the AI to understand what you want. If you prefer more control, you can type your own custom prompt in the text area. Be as descriptive as possible - mention the type of content, the style you want, colors if important, and any specific elements you'd like included. The more detail you provide, the better the AI can match your vision. For example, instead of just saying 'chart', you might say 'a bar chart showing quarterly sales data with blue bars and a dark background'. The AI generator is flexible and can handle both simple requests and complex, detailed descriptions. Experiment with different prompts to see what works best for your needs.",
  "Step 3: Generate and preview your slide. Click the Generate Slide button, and the AI will create your SVG code. A preview appears below showing your generated slide. Review it before downloading. Once you click the Generate Slide button, the AI processes your request and creates the SVG code. This typically takes just a few seconds, and you'll see a loading indicator while the generation is in progress. When complete, the generated SVG code appears in a code editor area, and a live preview is displayed below it. The preview shows exactly how your slide will look when used in the presentation, so you can verify that it meets your expectations. Take time to review the preview carefully - check that all elements are present, the layout looks good, colors are appropriate, and the content matches what you requested. If something isn't quite right, you can modify your prompt and regenerate, or you can edit the SVG code directly if you have specific changes in mind. The code editor allows you to make manual adjustments to the generated SVG, giving you complete control over the final result. Once you're satisfied with the preview, you're ready to download and use the slide in your presentation.",
  "Step 4: Download and use your slide. Enter a file name, then click Download SVG. The file will be saved to your downloads folder. Move it to your slides folder and add it to the slides array in index.html to include it in your presentation. Before downloading, make sure to enter a descriptive file name in the file name field. Use a name that clearly identifies the slide's content, like 'quarterly-sales-chart' or 'product-timeline'. Avoid spaces and special characters - use hyphens or underscores instead. When you click Download SVG, the file is saved to your browser's default downloads folder. The file is a standard SVG file that can be opened and edited with any text editor or SVG-compatible design tool. To use the slide in your presentation, move it from your downloads folder to your slides folder in the project directory. Then, open the index.html file and find the slides array. Add the new slide's file path to the array, following the same pattern as the existing slides. The slides will appear in the order they're listed in the array, so position your new slide where you want it in the presentation sequence. After saving index.html and refreshing your browser, your new slide will be available in the presentation. You can reorder slides anytime by rearranging the entries in the slides array.",
  "Adding animations to your slides is optional but powerful. Elements fade in from invisible to visible and scale up from 80% to 100% size over 0.6 seconds. To animate an element, open your SVG file in a text editor and add data-animate equals true to that element. Animations add visual interest and help guide your audience's attention to specific elements as they appear. The animation effect is subtle but effective - elements smoothly fade in while slightly scaling up, creating a professional, polished appearance. This animation draws the eye naturally to new content as it appears, making your presentation more engaging and easier to follow. To add animation to any element in your SVG, simply open the SVG file in a text editor and locate the element you want to animate. Add the attribute data-animate equals true to that element's opening tag. For example, if you have a text element, change it from text x equals 400 to text x equals 400 data-animate equals true. You can animate multiple elements in the same slide, and each will animate independently when the slide loads. The animation timing is consistent across all elements, creating a cohesive visual experience. Animations work particularly well for bullet points, diagrams with multiple components, or any content that benefits from sequential revelation. Use animations strategically to enhance understanding without overwhelming your audience with too much movement."
];

function generateAudio(text, index) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'tts-1',
      input: text,
      voice: 'alloy'
    });

    const options = {
      hostname: 'api.openai.com',
      path: '/v1/audio/speech',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`API returned status ${res.statusCode}`));
        return;
      }

      const filePath = path.join(__dirname, 'audio', `narration-${index + 1}.mp3`);
      const fileStream = fs.createWriteStream(filePath);
      
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        console.log(`Generated: narration-${index + 1}.mp3`);
        resolve();
      });
      
      fileStream.on('error', reject);
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function generateAll() {
  if (!API_KEY) {
    console.error('Error: OPENAI_API_KEY environment variable not set!');
    console.log('Set it with: set OPENAI_API_KEY=your-key-here (Windows)');
    console.log('Or: export OPENAI_API_KEY=your-key-here (Mac/Linux)');
    process.exit(1);
  }
  
  // Create audio directory if it doesn't exist
  const audioDir = path.join(__dirname, 'audio');
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir);
  }

  console.log('Generating audio files...');
  
  for (let i = 0; i < narrations.length; i++) {
    try {
      await generateAudio(narrations[i], i);
      // Wait a bit between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error generating audio ${i + 1}:`, error.message);
    }
  }
  
  console.log('Done!');
}

generateAll();
