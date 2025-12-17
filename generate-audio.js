// Script to generate audio files using OpenAI TTS API
// Run with: node generate-audio.js

const fs = require('fs');
const path = require('path');
const https = require('https');

// Get API key from environment variable
// Set it with: set OPENAI_API_KEY=your-key-here (Windows) or export OPENAI_API_KEY=your-key-here (Mac/Linux)
const API_KEY = process.env.OPENAI_API_KEY || '';

const narrations = [
  "Welcome to the SVG Slide Player. This is a professional presentation tool designed specifically for SVG image files. Think of it like PowerPoint, but simpler and more elegant. Unlike PowerPoint, this application is web-based, requires no installation, focuses exclusively on SVG graphics, and offers a streamlined interface without the complexity of traditional presentation software. It's perfect for showcasing vector graphics, diagrams, and illustrations in a clean, distraction-free environment.",
  "The Slide Player is a simple web application that displays a series of SVG images one at a time, like a digital slideshow. You can navigate through slides manually or set them to play automatically.",
  "SVG stands for Scalable Vector Graphics. It's a type of image format, like JPG or PNG, but designed for vector graphics. Unlike raster images, SVG files scale perfectly at any size and can be edited as code. You can create SVGs using tools like Inkscape, Adobe Illustrator, or Figma.",
  "At the bottom of the screen, you'll see control buttons. Prev moves to the previous slide, Play starts automatic playback, Pause stops it, and Next moves to the next slide. You can also use keyboard shortcuts: Right Arrow or Spacebar for next, Left Arrow for previous. The status display shows which slide you're viewing.",
  "The AI Content Generator lets you create professional slides instantly. Click the AI Generator button to access templates for BPM diagrams, infographics, charts, timelines, and more. Generate slides using AI prompts and download them instantly.",
  "Step 1: Open the AI Generator. Click the blue AI Generator button at the bottom of the screen. A modal window will open with generation options, allowing you to select templates or enter custom prompts.",
  "Step 2: Choose a template or enter a custom prompt. Quick templates are available for Title Slides, BPM Diagrams, Infographics, Bar Charts, and Timelines. Click a template button for quick start, or type your own description for custom slides.",
  "Step 3: Generate and preview your slide. Click the Generate Slide button, and the AI will create your SVG code. A preview appears below showing your generated slide. Review it before downloading.",
  "Step 4: Download and use your slide. Enter a file name, then click Download SVG. The file will be saved to your downloads folder. Move it to your slides folder and add it to the slides array in index.html to include it in your presentation.",
  "Adding animations to your slides is optional but powerful. Elements fade in from invisible to visible and scale up from 80% to 100% size over 0.6 seconds. To animate an element, open your SVG file in a text editor and add data-animate equals true to that element."
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
