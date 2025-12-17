// Script to regenerate only the first audio file
// Run with: node regenerate-audio-1.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.OPENAI_API_KEY || '';

const narration = "Welcome to the SVG Slide Player. This is a professional presentation tool designed specifically for SVG image files. Think of it like PowerPoint, but simpler and more elegant. Unlike PowerPoint, this application is web-based, requires no installation, focuses exclusively on SVG graphics, and offers a streamlined interface without the complexity of traditional presentation software. It's perfect for showcasing vector graphics, diagrams, and illustrations in a clean, distraction-free environment.";

function generateAudio(text) {
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

      const filePath = path.join(__dirname, 'audio', 'narration-1.mp3');
      const fileStream = fs.createWriteStream(filePath);
      
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        console.log('Generated: narration-1.mp3');
        resolve();
      });
      
      fileStream.on('error', reject);
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function regenerate() {
  if (!API_KEY) {
    console.error('Error: OPENAI_API_KEY environment variable not set!');
    console.log('Set it with: set OPENAI_API_KEY=your-key-here (Windows)');
    console.log('Or: export OPENAI_API_KEY=your-key-here (Mac/Linux)');
    process.exit(1);
  }
  
  console.log('Regenerating narration-1.mp3...');
  
  try {
    await generateAudio(narration);
    console.log('Done!');
  } catch (error) {
    console.error('Error generating audio:', error.message);
    process.exit(1);
  }
}

regenerate();
