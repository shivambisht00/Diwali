# ✨ Happy Diwali 2025 - Festival of Lights ✨

A beautiful, animated single-page Diwali blessing website featuring vibrant colors, smooth animations, and interactive elements to celebrate the Festival of Lights.

![Diwali Banner](images/WhatsApp_Image_2025-09-29_at_17.45.37-removebg-preview.png)

## 🎆 Features

### 🎨 Visual Design
- **Vibrant Theme**: Traditional Diwali colors including gold, deep red, orange, and purple
- **Animated Background**: Floating diyas and particle effects
- **Fireworks Display**: Animated GIF backgrounds for festive ambiance
- **Glowing Elements**: CSS animations for flickering diya flames and glowing text
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### 🎵 Audio & Video
- **Background Music**: Auto-playing Diwali-themed music with mute/unmute toggle
- **Music Control**: Fixed position music control button for easy access
- **Video Modal**: Celebration video in the blessing modal with controls

### 🖼️ Interactive Elements
- **Image Gallery**: Lightbox-style gallery with keyboard navigation
  - Arrow keys to navigate
  - Thumbnail preview
  - Click to view full size
- **Interactive Diyas**: Click-to-light interactive diya lamps
  - Animated flame effects
  - Spark particle effects on lighting
  - Visual and animation feedback
- **Countdown Timer**: Real-time countdown to Diwali 2025
- **Blessing Modal**: Animated typewriter effect for blessing messages

### ⌨️ Accessibility
- Keyboard navigation support
- ARIA labels for screen readers
- Tab-indexed interactive elements
- High contrast text and backgrounds

### 🎁 Easter Eggs
- **Konami Code**: Try ↑↑↓↓←→←→BA to light all diyas at once!

## 📂 Project Structure

```
diwali/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── script.js          # All JavaScript functionality
├── images/                 # Image assets
│   ├── 1.png              # Garland decoration
│   ├── GIF-2025-09-29-19-43-28-unscreen.gif  # Fireworks animation
│   ├── Gemini_Generated_Image_ozdb1ozdb1ozdb1o-removebg-preview.png  # Lantern
│   ├── WhatsApp_Image_2025-09-29_at_17.45.34-removebg-preview.png   # Diya
│   ├── WhatsApp_Image_2025-09-29_at_17.45.37-removebg-preview.png   # Main image
│   ├── WhatsApp_Image_2025-09-29_at_17.45.39-removebg-preview.png   # Firecracker
│   ├── WhatsApp_Image_2025-09-29_at_19.18.04-removebg-preview.png   # Marigold
│   └── om-rangoli_c913fbe8-c163-447e-997e-1ac6b6ba8f4a_700x.jpg-removebg-preview.png  # Rangoli
├── audio/                  # Audio files
│   ├── diwali2.mp3        # Background music (MP3 format)
│   ├── diwali2.ogg        # Background music (OGG format)
│   └── diwali2.wav        # Background music (WAV format)
├── videos/                 # Video files
│   └── video.mp4          # Celebration video
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best performance)

### Installation

1. **Clone or Download** the repository
   ```bash
   git clone <repository-url>
   cd diwali
   ```

2. **Organize Assets** (if not already done)
   - Move audio files to `audio/` folder
   - Move video files to `videos/` folder
   - Move image files to `images/` folder

3. **Open the Website**
   - **Option 1**: Double-click `index.html` to open in your browser
   - **Option 2**: Use a local server (recommended)
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
   - Open browser and navigate to `http://localhost:8000`

## 🎮 How to Use

### Main Features
1. **Welcome Animation**: Watch the animated "Happy Diwali" text and decorations appear
2. **Countdown**: See the real-time countdown to Diwali 2025
3. **Music Control**: Click the music icon on the right side to toggle background music
4. **Open Blessing**: Click the "Open Your Blessing" button to view the blessing modal with video
5. **View Gallery**: Click "View Gallery" to browse Diwali images
6. **Light Diyas**: Click on the interactive diyas in the "Light the Diyas" section

### Gallery Controls
- **Mouse**: Click thumbnail or use Previous/Next buttons
- **Keyboard**: 
  - `→` (Right Arrow) - Next image
  - `←` (Left Arrow) - Previous image
  - `Esc` - Close gallery

### Interactive Diyas
- Click any diya to light it up
- Watch the flame appear with a spark effect
- Light all diyas for the complete experience!

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - CSS Variables for theming
  - Keyframe animations
  - Flexbox and Grid layouts
  - Media queries for responsiveness
  - Advanced selectors and pseudo-elements
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Countdown timer
  - Image gallery system
  - Particle effects
  - Audio/Video control
- **jQuery**: For smooth animations and DOM utilities
- **Font Awesome**: For icons
- **Google Fonts**: Playfair Display, Dancing Script, Poppins

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### Performance Optimizations
- Lazy loading for images
- CSS animations using `transform` and `opacity` (GPU-accelerated)
- Efficient particle system
- Optimized audio formats for cross-browser support
- Minimal JavaScript for smooth performance

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --color-bg-start: #0a0416;
    --color-gold: #FFD700;
    --color-orange: #FF6B35;
    --color-pink: #FF1493;
    --color-purple: #9D4EDD;
    /* ... more colors */
}
```

### Changing Blessing Message
Edit in `js/script.js`:
```javascript
const titleLetter = "✨ Your Custom Title ✨";
const datatxtletter = "Your custom blessing message here...";
```

### Changing Diwali Date
Edit in `js/script.js`:
```javascript
const diwaliDate = new Date('October 21, 2025 00:00:00').getTime();
```

### Adding More Gallery Images
Add image paths to the array in `js/script.js`:
```javascript
const galleryImages = [
    'images/image1.png',
    'images/image2.png',
    // Add more images here
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Features Checklist

- ✅ Animated welcome section with glowing text
- ✅ Heartfelt blessing message with typewriter effect
- ✅ Background music with mute/unmute toggle
- ✅ Image gallery slider with lightbox
- ✅ Video embedded in modal
- ✅ Floating elements (sparkles, diyas, lanterns)
- ✅ Footer with branding and thank-you message
- ✅ Countdown to Diwali
- ✅ Interactive "Light the Diya" feature
- ✅ Fully responsive design
- ✅ Smooth animations and transitions
- ✅ Keyboard accessibility
- ✅ Cross-browser compatibility

## 🐛 Troubleshooting

### Music Not Playing
- **Issue**: Browsers block autoplay with sound
- **Solution**: Click anywhere on the page to enable music, or use the music control button

### Images Not Loading
- **Issue**: Incorrect file paths
- **Solution**: Ensure all images are in the `images/` folder and paths in HTML match exactly

### Video Not Playing
- **Issue**: Video format not supported
- **Solution**: Ensure video.mp4 is in H.264 format, or add multiple source formats

### Countdown Not Working
- **Issue**: Date is in the past
- **Solution**: Update the Diwali date in `js/script.js` to the correct year

## 📄 License

This project is created for celebrating Diwali 2025. Feel free to use and modify for personal and educational purposes.

## 👨‍💻 Author

**Shivam Bisht**
- Instagram: [@its_shivambisht_31_07](https://www.instagram.com/its_shivambisht_31_07?igsh=MTl2MWc0YzRrd3FjNA==)

## 🙏 Acknowledgments

- Google Fonts for beautiful typography
- Font Awesome for amazing icons
- All the open-source libraries that made this possible

## 🎊 Credits

Created with ❤️ by Shivam Bisht for Diwali 2025

---

### 🪔 Wishing you a Happy and Prosperous Diwali! 🎆

May the festival of lights illuminate your life with endless joy, prosperity, and happiness!

**शुभ दीपावली 2025! 🙏**
