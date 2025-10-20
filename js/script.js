// ==================== GLOBAL VARIABLES ====================
const backgroundMusic = document.getElementById("backgroundMusic");
const musicControl = document.getElementById("musicControl");
const musicIcon = document.getElementById("musicIcon");
const innerVideo = document.querySelector(".fireworks__img video");
let musicPlayed = false;
let isMusicPlaying = false;

// ==================== DYNAMIC TEXT CONTENT ====================
const datetxt = "October 21, 2025";
const titleLetter = "✨ Diwali Blessings For You ✨";
const datatxtletter = "May this Diwali bring you endless joy, prosperity, and success. May the divine light of thousands of diyas illuminate your path and fill your life with peace, happiness, and good fortune. May Goddess Lakshmi shower her blessings upon you and your family. Wishing you a sparkling and memorable Festival of Lights! 🪔";

// ==================== GALLERY IMAGES ====================
const galleryImages = [
    'images/WhatsApp_Image_2025-09-29_at_17.45.37-removebg-preview.png',
    'images/Gemini_Generated_Image_ozdb1ozdb1ozdb1o-removebg-preview.png',
    'images/WhatsApp_Image_2025-09-29_at_17.45.34-removebg-preview.png',
    'images/WhatsApp_Image_2025-09-29_at_19.18.04-removebg-preview.png',
    'images/om-rangoli_c913fbe8-c163-447e-997e-1ac6b6ba8f4a_700x.jpg-removebg-preview.png'
];

let currentGalleryIndex = 0;

// ==================== PARTICLES ANIMATION ====================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ==================== MUSIC CONTROL ====================
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicIcon.className = 'fa-solid fa-volume-xmark';
        isMusicPlaying = false;
    } else {
        backgroundMusic.play().catch(e => console.log('Music play failed:', e));
        musicIcon.className = 'fa-solid fa-volume-high';
        isMusicPlaying = true;
        musicPlayed = true;
    }
}

// Auto-play music on first interaction
document.body.addEventListener("click", (e) => {
    if (e.target.closest("#btn__letter") || 
        e.target.closest(".close") || 
        e.target.closest("#musicControl") ||
        e.target.closest("#btn__gallery") ||
        e.target.closest(".gallery-close")) {
        return;
    }
    if (!musicPlayed && backgroundMusic.paused) {
        backgroundMusic.play().catch(e => console.log('Music play failed:', e));
        musicIcon.className = 'fa-solid fa-volume-high';
        isMusicPlaying = true;
        musicPlayed = true;
    }
}, { once: true });

// Music control click handler
musicControl.addEventListener('click', toggleMusic);

// ==================== COUNTDOWN TIMER ====================
function updateCountdown() {
    // Diwali 2025 date - October 21, 2025
    const diwaliDate = new Date('October 21, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = diwaliDate - now;

    if (distance < 0) {
        // If Diwali has passed, hide countdown
        document.getElementById('countdownContainer').style.display = 'none';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// ==================== TYPEWRITER EFFECT ====================
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    const timer = setInterval(function() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
    return timer;
}

// ==================== INTERACTIVE DIYAS ====================
function setupInteractiveDiyas() {
    const diyas = document.querySelectorAll('.interactive-diya');
    
    diyas.forEach(diya => {
        diya.addEventListener('click', function() {
            const isLit = this.getAttribute('data-lit') === 'true';
            this.setAttribute('data-lit', !isLit);
            
            // Play sound effect (if you add one)
            // const lightSound = new Audio('audio/light.mp3');
            // lightSound.play();
            
            // Add particle effect
            if (!isLit) {
                createSparkEffect(this);
            }
        });
    });
}

function createSparkEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        const spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.style.left = centerX + 'px';
        spark.style.top = centerY + 'px';
        spark.style.width = '4px';
        spark.style.height = '4px';
        spark.style.background = '#FFD700';
        spark.style.borderRadius = '50%';
        spark.style.pointerEvents = 'none';
        spark.style.zIndex = '9999';
        spark.style.boxShadow = '0 0 10px #FFD700';
        
        document.body.appendChild(spark);
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        let x = 0, y = 0;
        
        const animateSpark = () => {
            x += vx * 0.02;
            y += vy * 0.02 + 2; // gravity
            opacity -= 0.02;
            
            spark.style.transform = `translate(${x}px, ${y}px)`;
            spark.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateSpark);
            } else {
                spark.remove();
            }
        };
        
        animateSpark();
    }
}

// ==================== IMAGE GALLERY ====================
function openGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    showGalleryImage(0);
    createThumbnails();
    
    // Pause background music, keep video muted
    if (isMusicPlaying) {
        backgroundMusic.pause();
    }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
    
    // Resume background music
    if (musicPlayed && isMusicPlaying) {
        backgroundMusic.play();
    }
}

function showGalleryImage(index) {
    currentGalleryIndex = index;
    const img = document.getElementById('galleryImage');
    img.src = galleryImages[index];
    
    document.getElementById('currentImage').textContent = index + 1;
    document.getElementById('totalImages').textContent = galleryImages.length;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    showGalleryImage(currentGalleryIndex);
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(currentGalleryIndex);
}

function createThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    container.innerHTML = '';
    
    galleryImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'gallery-thumbnail';
        if (index === 0) img.classList.add('active');
        img.addEventListener('click', () => showGalleryImage(index));
        container.appendChild(img);
    });
}

// Gallery event listeners
document.getElementById('btn__gallery').addEventListener('click', openGallery);
document.getElementById('galleryClose').addEventListener('click', closeGallery);
document.getElementById('galleryNext').addEventListener('click', nextImage);
document.getElementById('galleryPrev').addEventListener('click', prevImage);

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeGallery();
    }
});

// ==================== BLESSING LETTER MODAL ====================
let text__letter_p = document.querySelector(".text__letter p");
let title__letter_div = document.querySelector(".title__letter");
let intervalContent, intervalTitle;

$("#btn__letter").on("click", function() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
    }
    innerVideo.muted = false;
    innerVideo.currentTime = 0;
    innerVideo.play();
    
    $(".box__letter").fadeIn(400);
    setTimeout(function() {
        $(".letter__border").addClass('show');
    }, 200);
    
    // Type title
    setTimeout(function() {
        typeWriter(title__letter_div, titleLetter, 60);
    }, 800);

    // Show video with animation
    setTimeout(function() {
        $(".fireworks__img").addClass("animationOp");
    }, 1500);

    // Type content
    setTimeout(function() {
        typeWriter(text__letter_p, datatxtletter, 40);
    }, 2000);
});

$(".close").on("click", function() {
    if (intervalContent) clearInterval(intervalContent);
    if (intervalTitle) clearInterval(intervalTitle);

    innerVideo.pause();
    innerVideo.muted = true;
    innerVideo.currentTime = 0;
    
    if (musicPlayed && isMusicPlaying) {
        backgroundMusic.play();
    }
    
    title__letter_div.textContent = "";
    text__letter_p.textContent = "";

    $(".fireworks__img").removeClass("animationOp");
    $(".letter__border").removeClass('show');
    
    setTimeout(function() {
        $(".box__letter").fadeOut(400);
    }, 300);
});

// ==================== FLOATING DIYAS ANIMATION ====================
function setupFloatingDiyas() {
    const diyas = document.querySelectorAll('.floating-diya');
    diyas.forEach((diya, index) => {
        diya.style.animationDelay = `${index * 0.8}s`;
    });
}

// ==================== INITIALIZATION ====================
function init() {
    // Create particles
    createParticles();
    
    // Setup floating diyas
    setupFloatingDiyas();
    
    // Setup interactive diyas
    setupInteractiveDiyas();
    
    // Animate festival date
    const festival_date_span = document.getElementById("festivalDate");
    setTimeout(function() {
        typeWriter(festival_date_span, datetxt, 80);
    }, 2000);
    
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== RUN ON PAGE LOAD ====================
document.addEventListener('DOMContentLoaded', init);

// ==================== EASTER EGG - KONAMI CODE ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg: Light all diyas at once!
        document.querySelectorAll('.interactive-diya').forEach(diya => {
            diya.setAttribute('data-lit', 'true');
            createSparkEffect(diya);
        });
        
        // Show special message
        alert('🎆 Special Diwali Blessing Unlocked! May all your wishes come true! 🪔');
    }
});

// ==================== ACCESSIBILITY ====================
// Add keyboard navigation for interactive elements
document.querySelectorAll('.interactive-diya').forEach((diya, index) => {
    diya.setAttribute('tabindex', '0');
    diya.setAttribute('role', 'button');
    diya.setAttribute('aria-label', `Diya ${index + 1}. Click to light.`);
    
    diya.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            diya.click();
        }
    });
});

// ==================== CONSOLE MESSAGE ====================
console.log(`
    ✨ Happy Diwali 2025! ✨
    
    🪔 May the festival of lights illuminate your life
    🎆 May prosperity and happiness fill your home
    🙏 May Goddess Lakshmi bless you abundantly
    
    Created with ❤️ by Shivam Bisht
    
    Easter Egg: Try the Konami Code! ↑↑↓↓←→←→BA
`);
