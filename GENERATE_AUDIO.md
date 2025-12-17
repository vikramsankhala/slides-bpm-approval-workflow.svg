# Generating Audio Narration Files

## Option 1: Using Node.js Script (Recommended)

1. **Install Node.js** (if not already installed)

2. **Set your OpenAI API key**:
   - Windows: `set OPENAI_API_KEY=sk-proj-...`
   - Mac/Linux: `export OPENAI_API_KEY=sk-proj-...`

3. **Run the generation script**:
   ```bash
   node generate-audio.js
   ```

3. **Audio files will be created** in the `audio/` folder:
   - `narration-1.mp3`
   - `narration-2.mp3`
   - ... up to `narration-10.mp3`

## Option 2: Manual Generation via OpenAI API

You can also generate audio files manually using curl or any HTTP client:

```bash
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "tts-1",
    "input": "Your narration text here",
    "voice": "alloy"
  }' \
  --output audio/narration-1.mp3
```

## Option 3: Use Online TTS Services

You can use online text-to-speech services like:
- Google Text-to-Speech
- Amazon Polly
- Microsoft Azure Speech
- ElevenLabs

Then save the files as `narration-1.mp3`, `narration-2.mp3`, etc. in the `audio/` folder.

## Voice Options

OpenAI TTS supports these voices:
- `alloy` (default - neutral, clear)
- `echo` (male, clear)
- `fable` (British accent)
- `onyx` (deep male)
- `nova` (young female)
- `shimmer` (soft female)

Change the voice in `generate-audio.js` if desired.

## Fallback Behavior

If audio files don't exist, the player will automatically use the browser's built-in Web Speech API as a fallback. This ensures narration always works, even without pre-generated files.
