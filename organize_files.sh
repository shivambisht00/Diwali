#!/bin/bash

# Diwali Website - File Organization Script
# This script moves files to their appropriate folders

echo "🪔 Diwali Website File Organization Script 🪔"
echo "=============================================="
echo ""

# Create directories if they don't exist
echo "📁 Creating directory structure..."
mkdir -p images
mkdir -p audio
mkdir -p videos
mkdir -p css
mkdir -p js

# Move audio files
echo "🎵 Moving audio files..."
if [ -f "diwali2.mp3" ]; then
    mv diwali2.mp3 audio/ 2>/dev/null || echo "  ✓ diwali2.mp3 already in place"
fi
if [ -f "diwali2.ogg" ]; then
    mv diwali2.ogg audio/ 2>/dev/null || echo "  ✓ diwali2.ogg already in place"
fi
if [ -f "diwali2.wav" ]; then
    mv diwali2.wav audio/ 2>/dev/null || echo "  ✓ diwali2.wav already in place"
fi

# Move video files
echo "🎬 Moving video files..."
if [ -f "video.mp4" ]; then
    mv video.mp4 videos/ 2>/dev/null || echo "  ✓ video.mp4 already in place"
fi

# Move image files
echo "🖼️  Moving image files..."
for img in "1.png" \
    "GIF-2025-09-29-19-43-28-unscreen.gif" \
    "Gemini_Generated_Image_ozdb1ozdb1ozdb1o-removebg-preview.png" \
    "WhatsApp Image 2025-09-26 at 20.04.10.jpeg" \
    "WhatsApp_Image_2025-09-29_at_17.45.34-removebg-preview.png" \
    "WhatsApp_Image_2025-09-29_at_17.45.37-removebg-preview.png" \
    "WhatsApp_Image_2025-09-29_at_17.45.39-removebg-preview.png" \
    "WhatsApp_Image_2025-09-29_at_19.18.04-removebg-preview.png" \
    "om-rangoli_c913fbe8-c163-447e-997e-1ac6b6ba8f4a_700x.jpg-removebg-preview.png"; do
    if [ -f "$img" ]; then
        mv "$img" images/ 2>/dev/null || echo "  ✓ $img already in place"
    fi
done

# Move CSS files (if style.css exists in root)
echo "🎨 Organizing CSS files..."
if [ -f "style.css" ] && [ ! -f "css/style.css" ]; then
    mv style.css css/ 2>/dev/null || echo "  ✓ style.css already in place"
fi

# Move JS files (if script.js exists in root)
echo "⚡ Organizing JavaScript files..."
if [ -f "script.js" ] && [ ! -f "js/script.js" ]; then
    mv script.js js/ 2>/dev/null || echo "  ✓ script.js already in place"
fi

echo ""
echo "✨ File organization complete! ✨"
echo ""
echo "📊 Directory structure:"
echo "diwali/"
echo "├── index.html"
echo "├── css/"
echo "│   └── style.css"
echo "├── js/"
echo "│   └── script.js"
echo "├── images/ ($(ls images 2>/dev/null | wc -l | tr -d ' ') files)"
echo "├── audio/ ($(ls audio 2>/dev/null | wc -l | tr -d ' ') files)"
echo "├── videos/ ($(ls videos 2>/dev/null | wc -l | tr -d ' ') files)"
echo "└── README.md"
echo ""
echo "🚀 You're all set! Open index.html in your browser to view the website."
echo "🙏 Happy Diwali 2025! 🪔"
