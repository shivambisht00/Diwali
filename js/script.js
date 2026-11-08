// ==================== GLOBAL VARIABLES ====================
const backgroundMusic = document.getElementById("backgroundMusic");
const musicControl = document.getElementById("musicControl");
const musicIcon = document.getElementById("musicIcon");
const innerVideo = document.querySelector(".fireworks__img video");
let musicPlayed = false;
let isMusicPlaying = false;

// ==================== DYNAMIC TEXT CONTENT ====================
const datetxt = "November 8, 2026";
const titleLetter = "✨ Diwali Blessings For You ✨";
const datatxtletter = "May this Diwali bring you endless joy, prosperity, and success. May the divine light of thousands of diyas illuminate your path and fill your life with peace and happiness. May Maa Laxmi shower her blessings upon you and your family. ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः 🪔 शुभ दीपावली!";

// Diwali 2026 (isse calendar se ek baar confirm kar lena)
const DIWALI_START = new Date('November 8, 2026 00:00:00').getTime();
const ONE_DAY = 86400000;

// ==================== GALLERY IMAGES ====================
const galleryImages = [
    'images/WhatsApp_Image_2025-09-29_at_17.45.37-removebg-preview.png',
    'images/Gemini_Generated_Image_ozdb1ozdb1ozdb1o-removebg-preview.png',
    'images/WhatsApp_Image_2025-09-29_at_17.45.34-removebg-preview.png',
    'images/WhatsApp_Image_2025-09-29_at_19.18.04-removebg-preview.png',
    'images/om-rangoli_c913fbe8-c163-447e-997e-1ac6b6ba8f4a_700x.jpg-removebg-preview.png',
    'images/laxmi-maa.png'
];
let currentGalleryIndex = 0;

// ==================== PARTICLES ====================
function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// ==================== MUSIC CONTROL ====================
function setMusicUI(on) {
    musicIcon.className = on ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
}

function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        setMusicUI(false);
    } else {
        backgroundMusic.play().then(() => {
            isMusicPlaying = true;
            musicPlayed = true;
            setMusicUI(true);
        }).catch(e => console.log('Music play failed:', e));
    }
}

setMusicUI(false); // shuru mein music band

// Pehle valid click par music start (ab "once" nahi, isliye bug nahi aata)
document.body.addEventListener("click", (e) => {
    if (musicPlayed) return;
    if (e.target.closest("#btn__letter, .close, #musicControl, #btn__gallery, .gallery-close")) return;
    backgroundMusic.play().then(() => {
        musicPlayed = true;
        isMusicPlaying = true;
        setMusicUI(true);
    }).catch(() => {});
});

musicControl.addEventListener('click', toggleMusic);

// ==================== COUNTDOWN TIMER ====================
function updateCountdown() {
    const box = document.getElementById('countdownContainer');
    const now = Date.now();

    if (now >= DIWALI_START + ONE_DAY) { box.style.display = 'none'; return; }
    if (now >= DIWALI_START) {
        box.innerHTML = '<div class="countdown-title">🪔 आज दीपावली है! शुभ दीपावली 🪔</div>';
        return;
    }

    const d = DIWALI_START - now;
    const set = (id, v) => { document.getElementById(id).textContent = String(v).padStart(2, '0'); };
    set('days', Math.floor(d / ONE_DAY));
    set('hours', Math.floor(d % ONE_DAY / 3600000));
    set('minutes', Math.floor(d % 3600000 / 60000));
    set('seconds', Math.floor(d % 60000 / 1000));
}

// ==================== TYPEWRITER (emoji + Hindi safe) ====================
function typeWriter(element, text, speed, callback) {
    const chars = Array.from(text);
    let i = 0;
    element.textContent = '';
    const timer = setInterval(() => {
        if (i < chars.length) {
            element.textContent += chars[i++];
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
    return timer;
}

// ==================== INTERACTIVE DIYAS ====================
function setupInteractiveDiyas() {
    document.querySelectorAll('.interactive-diya').forEach((diya, index) => {
        diya.addEventListener('click', function () {
            const isLit = this.getAttribute('data-lit') === 'true';
            this.setAttribute('data-lit', String(!isLit));
            if (!isLit) createSparkEffect(this);
        });

        // Accessibility
        diya.setAttribute('tabindex', '0');
        diya.setAttribute('role', 'button');
        diya.setAttribute('aria-label', `Diya ${index + 1}. Click to light.`);
        diya.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); diya.click(); }
        });
    });
}

function createSparkEffect(element) {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < 10; i++) {
        const spark = document.createElement('div');
        Object.assign(spark.style, {
            position: 'fixed', left: cx + 'px', top: cy + 'px',
            width: '4px', height: '4px', background: '#FFD700',
            borderRadius: '50%', pointerEvents: 'none', zIndex: '9999',
            boxShadow: '0 0 10px #FFD700'
        });
        document.body.appendChild(spark);

        const angle = (Math.PI * 2 * i) / 10;
        const vx = Math.cos(angle) * 100;
        const vy = Math.sin(angle) * 100;
        let opacity = 1, x = 0, y = 0;

        const step = () => {
            x += vx * 0.02;
            y += vy * 0.02 + 2;
            opacity -= 0.02;
            spark.style.transform = `translate(${x}px, ${y}px)`;
            spark.style.opacity = opacity;
            if (opacity > 0) requestAnimationFrame(step);
            else spark.remove();
        };
        step();
    }
}

// ==================== IMAGE GALLERY ====================
function openGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    createThumbnails();
    showGalleryImage(0);
    if (isMusicPlaying) backgroundMusic.pause();
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
    if (musicPlayed && isMusicPlaying) backgroundMusic.play().catch(() => {});
}

function showGalleryImage(index) {
    currentGalleryIndex = index;
    document.getElementById('galleryImage').src = galleryImages[index];
    document.getElementById('currentImage').textContent = index + 1;
    document.getElementById('totalImages').textContent = galleryImages.length;
    document.querySelectorAll('.gallery-thumbnail').forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

function nextImage() { showGalleryImage((currentGalleryIndex + 1) % galleryImages.length); }
function prevImage() { showGalleryImage((currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length); }

function createThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    container.innerHTML = '';
    galleryImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Thumbnail ' + (index + 1);
        img.className = 'gallery-thumbnail';
        img.addEventListener('click', () => showGalleryImage(index));
        container.appendChild(img);
    });
}

document.getElementById('btn__gallery').addEventListener('click', openGallery);
document.getElementById('galleryClose').addEventListener('click', closeGallery);
document.getElementById('galleryNext').addEventListener('click', nextImage);
document.getElementById('galleryPrev').addEventListener('click', prevImage);

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeGallery();
    }
});

// ==================== BLESSING LETTER MODAL ====================
const text__letter_p = document.querySelector(".text__letter p");
const title__letter_div = document.querySelector(".title__letter");
let timers = [], typers = [];
const later = (fn, ms) => timers.push(setTimeout(fn, ms));
const clearAll = () => {
    timers.forEach(clearTimeout);
    typers.forEach(clearInterval);
    timers = []; typers = [];
};

$("#btn__letter").on("click", function () {
    clearAll();
    if (isMusicPlaying) backgroundMusic.pause();
    innerVideo.muted = false;
    innerVideo.currentTime = 0;
    innerVideo.play().catch(() => {});

    $(".box__letter").addClass("open");
    later(() => $(".letter__border").addClass("show"), 200);
    later(() => typers.push(typeWriter(title__letter_div, titleLetter, 60)), 800);
    later(() => $(".fireworks__img").addClass("animationOp"), 1500);
    later(() => typers.push(typeWriter(text__letter_p, datatxtletter, 40)), 2000);
});

$(".close").on("click", function () {
    clearAll();
    innerVideo.pause();
    innerVideo.muted = true;
    innerVideo.currentTime = 0;
    if (musicPlayed && isMusicPlaying) backgroundMusic.play().catch(() => {});

    title__letter_div.textContent = "";
    text__letter_p.textContent = "";
    $(".fireworks__img").removeClass("animationOp");
    $(".letter__border").removeClass("show");
    later(() => $(".box__letter").removeClass("open"), 300);
});

// ==================== FLOATING DIYAS ====================
function setupFloatingDiyas() {
    document.querySelectorAll('.floating-diya').forEach((d, i) => {
        d.style.animationDelay = `${i * 0.8}s`;
    });
}

// ==================== INITIALIZATION ====================
function init() {
    createParticles();
    setupFloatingDiyas();
    setupInteractiveDiyas();

    const dateSpan = document.getElementById("festivalDate");
    setTimeout(() => typeWriter(dateSpan, datetxt, 80), 2000);

    updateCountdown();
    setInterval(updateCountdown, 1000);

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

document.addEventListener('DOMContentLoaded', init);

// ==================== EASTER EGG - KONAMI CODE ====================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.querySelectorAll('.interactive-diya').forEach(d => {
            d.setAttribute('data-lit', 'true');
            createSparkEffect(d);
        });
        alert('🎆 Special Diwali Blessing Unlocked! Jai Maa Laxmi! 🪔');
    }
});

// ==================== CONSOLE MESSAGE ====================
console.log(`
    ✨ Happy Diwali 2026! ✨
    🪔 May the festival of lights illuminate your life
    🙏 Jai Maa Laxmi!
    Created with ❤️ by Shivam Bisht
`);
