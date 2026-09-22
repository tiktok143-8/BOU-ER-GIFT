/**
 * 💕 Reasons I Love You — 3D Keepsake Book Engine
 * Complete 3D Experience: Closed Book ➔ Open Spread ➔ 12 Page Turns ➔ Full 3D Close & Finale
 */
(function () {
  'use strict';

  // ─── 1. Romantic Reasons Data ───────────────────────────────────────
  const DEFAULT_REASONS = [
    {
      text: "তুমি হলে এই পৃথিবীর সবথেকে সুন্দরতম রমনী, সুহাসিনী, সুকেশিনী, রূপবতী আর গুণবতী",
      secretNote: "তুমি আমাকে নিজের থেকেও বেশি ভালোবাসো",
      emoji: "💕", icon: "star",
      polaroidCaption: "Happy birthday to you Mihi...",
      quote: "তোমাকে পেয়ে আমি অনেক বেশি আনন্দিত",
      chapter: "Golden memory",
      theme: "rose"
    },
    {
      text: "তোমার হাসি আমার খুব ভালো লাগে",
      secretNote: "তুমি যখন হাসো তখন আমার মনে হয় সম্পূর্ণ পৃথিবী থমকে গেছে",
      emoji: "😃", icon: "moon",
      polaroidCaption: "তোমার সাথে প্রথম ছবি",
      quote: "সেদিন আমি আসলেই অনেক খুশি ছিলাম",
      chapter: "তোমাকে আরো ভালোবাসবো",
      theme: "navy"
    },
    {
      text: "তোমাকে এখন ভালোবাসি ভবিষ্যতেও অনেক ভালোবাসবো",
      secretNote: "I keep every note you ever write me in a little box. Each word is a warm reminder of how deeply you care.",
      emoji: "💌", icon: "letter",
      polaroidCaption: "তোমর চোখের মায়ায় পরেছি",
      quote: "তোমার সাথে কাটানো সকল মূহুর্তগুলো ছিলো স্মৃতিময়",
      chapter: "love you forever",
      theme: "blush"
    },
    {
      text: "শুভ জন্মদিন আমার প্রিয় বউ...❤️ আজকের দিন এ তোমাকে অনেক অনেক শুভেচ্ছা। আমার সবথেকে বিশ্বাস এর মানুষ তুমি। রূপ না দেখেই ভালোবেসেছিলাম তোমাকে, কিন্তু দেখি তোমার রূপ তোমার মনের থেকেও সুন্দর। You are my love...❤️💞 আমি এই কথা বার বার বলি... অচেনা মানুষ টা আজকে আমার সবথেকে কাছের। তোমাকে নিয়ে বলে শেষ হবে না।   ভালোবাসি ভালোবাসি ভালোবাসি   love you so much bou...❤️  জন্মদিনে তোমাকে অনেক অনেক শুভেচ্ছা।                     Happy Birthday To You Mihi",
      secretNote: "Watching you speak with passion is breathtaking. You radiate a sparkle that inspires me every single day.",
      emoji: "✨", icon: "sparkle",
      polaroidCaption: "শুভ জন্মদিন💝",
      quote: "আজকে দেখা করতে পারলে খুশি হোতাম",
      chapter: "Happy birthday to you dear bou...❤️",
      theme: "peach"
    },
    
  ];

  const SVGICONS = {
    star:   `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    moon:   `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    letter: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    sparkle:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
    heart:  `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    leaf:   `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-4 4-9 8-10a7 7 0 0 1 7 7A8 8 0 0 1 11 20z"/><path d="M11 20v-9"/></svg>`,
    flower: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M12 17a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0v-1a3 3 0 0 0-3-3z"/><path d="M3 12a3 3 0 0 0 3 3h1a3 3 0 0 0 0-6H6a3 3 0 0 0-3 3z"/><path d="M17 12a3 3 0 0 0 3 3h1a3 3 0 0 0 0-6h-1a3 3 0 0 0-3 3z"/></svg>`,
    sun:    `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    candle: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21h6M9 21V13a3 3 0 0 1 6 0v8M12 3a2 2 0 0 1 2 2c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 0 1 2-2z"/></svg>`,
    home:   `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  };

  // ─── 2. State ────────────────────────────────────────────────────────
  let reasons       = loadReasons();
  let bookState     = 'intro'; // 'intro' | 'opening' | 'reading' | 'closing' | 'done'
  let currentPage   = 0;       // 0-indexed leaf on top of right stack (0 to reasons.length - 1)
  let leafEls       = [];
  let isPageTurning = false;
  let soundEnabled  = true;

  // ─── 3. DOM Elements ────────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const closedBook      = $('closed-book');
  const openBookEl      = $('open-book');
  const openCta         = $('open-cta');
  const spreadRight     = $('spread-right');
  const polaroidCaption = $('polaroid-caption');
  const handwrittenNote = $('handwritten-note');
  const chapterLabel    = $('chapter-label');
  const polaroidScene   = $('polaroid-scene');
  const navControls     = $('nav-controls');
  const btnNext         = $('btn-next');
  const btnNextText     = $('btn-next-text');
  const btnOpenBook     = $('btn-open-book');
  const closeCta        = $('close-cta');

  // ─── 4. Utility Functions ───────────────────────────────────────────
  function show(el) { if (el) el.classList.remove('hidden'); }
  function hide(el) { if (el) el.classList.add('hidden'); }
  function esc(s = '') {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ─── 5. HTML Builders for Leaves ────────────────────────────────────
  function frontHTML(item, idx) {
    const icon = SVGICONS[item.icon] || SVGICONS.heart;

    return `
      <div class="lf-foil" aria-hidden="true"></div>
      <div class="lf-pattern" aria-hidden="true"></div>
      <div class="lf-shimmer" aria-hidden="true"></div>
      <div class="lf-badge">
        <span class="lf-star" aria-hidden="true">✦</span>
       <span class="lf-number">${idx === 3 ? '' : `Reason #${idx + 1}`}</span>
        <span class="lf-star" aria-hidden="true">✦</span>
      </div>
      <div class="lf-quote">
        <span class="qmark qmark--o" aria-hidden="true">"</span>
        <p class="lf-reason ${idx === 3 ? 'last-page-text' : ''}">${esc(item.text)}</p>
        <span class="qmark qmark--c" aria-hidden="true">"</span>
      </div>
      <div class="lf-footer">
        <span class="lf-emoji" aria-hidden="true">${item.emoji || '❤️'}</span>
        <span aria-hidden="true" style="color:var(--gold);opacity:.65">${icon}</span>
      </div>
      <div class="lf-peel" aria-hidden="true"><div class="lf-peel-tri"></div></div>`;
  }

  function backHTML(item, idx) {
    return `
      <div class="lf-foil" aria-hidden="true"></div>
      <div class="lf-pattern" aria-hidden="true"></div>
      <div class="lf-shimmer" aria-hidden="true"></div>
      <div class="lf-badge">
        <span class="lf-star" aria-hidden="true">✦</span>
        <span class="lf-number">Secret Note #${idx + 1}</span>
        <span class="lf-star" aria-hidden="true">✦</span>
      </div>
      <div class="lf-secret">
        <span class="lf-secret-label">A Love Note for You</span>
        <p class="lf-secret-text">${esc(item.secretNote || 'I love you more than words can say.')}</p>
        <span class="lf-secret-emoji" aria-hidden="true">❤️</span>
      </div>
      <div class="lf-footer"></div>`;
  }

  function createLeaves() {
    spreadRight.innerHTML = '';
    leafEls = [];
    const total = reasons.length;

    reasons.forEach((item, idx) => {
      const leaf = document.createElement('div');
      leaf.className = 'page-leaf';
      leaf.id = `leaf-${idx}`;
      leaf.setAttribute('role', 'button');
      leaf.setAttribute('tabindex', idx === 0 ? '0' : '-1');
      leaf.setAttribute('aria-label', `Page ${idx + 1}: ${item.text}`);
      leaf.style.zIndex = total - idx;

      leaf.innerHTML = `
        <div class="page-leaf__face page-leaf__face--front" data-theme="${item.theme || 'rose'}">${frontHTML(item, idx)}</div>
        <div class="page-leaf__face page-leaf__face--back"  data-theme="${item.theme || 'rose'}">${backHTML(item, idx)}</div>`;

      // Clicking any leaf advances to next page or closes if on last page
      leaf.addEventListener('click', () => {
        if (bookState === 'reading') nextPage();
      });

      spreadRight.appendChild(leaf);
      leafEls.push(leaf);
    });
  }

// ─── 6. Left Page Updates ───────────────────────────────────────────
function updatePagePhoto(idx) {
  const images = document.querySelectorAll(
    '#polaroid-scene .page-photo'
  );

  if (!images.length) return;

  images.forEach((img, i) => {
    img.style.opacity = '0';
    img.classList.remove('is-active');
  });

  const activeImg = images[idx];

  if (activeImg) {
    activeImg.classList.add('is-active');
    activeImg.style.opacity = '1';
  }
}
function updateLeftPage(idx) {
  updatePagePhoto(idx);

  const item = reasons[idx] || reasons[0];

  polaroidCaption.textContent =
    item.polaroidCaption || 'A quiet moment';

  handwrittenNote.textContent =
    `"${item.quote || 'In all the world, there is no heart for me like yours.'}"`;

  chapterLabel.textContent =
    item.chapter || `Chapter ${idx + 1}`;

  if (openBookEl) {
    openBookEl.setAttribute(
      'data-theme',
      item.theme || 'rose'
    );
  }

  const sky = getComputedStyle(document.documentElement)
    .getPropertyValue('--tsky')
    .trim();

  if (sky) {
    polaroidScene.style.background = sky;
  }
}

function updateZIndices() {
  const total = reasons.length;

  leafEls.forEach((leaf, idx) => {
    leaf.style.zIndex =
      (idx < currentPage)
        ? (idx + 1)
        : (total - idx);
  });
}

function updateProgress() {
  // Progress indicator is not used
}

function updateNavButtons() {
  const total = reasons.length;

  if (currentPage >= total - 1) {
    btnNext.disabled = true;
    btnNextText.textContent = 'Next Page';
    show(closeCta);
  } else {
    btnNext.disabled = false;
    btnNextText.textContent = 'Next Page';
    hide(closeCta);
  }

  leafEls.forEach((el, i) => {
    el.setAttribute(
      'tabindex',
      i === currentPage ? '0' : '-1'
    );
  });
}
  // ─── 7. Book Open & Close Workflows ─────────────────────────────────
  function doOpenBook() {
    if (bookState !== 'intro' && bookState !== 'done') return;
    bookState = 'opening';
    initAudio();
    startMelody();

    closedBook.classList.add('is-opening');
    openCta.classList.add('is-opening');
    playFlipSound();

    setTimeout(() => {
      hide(closedBook);
      hide(openCta);
      closedBook.classList.remove('is-opening', 'is-done');
      openCta.classList.remove('is-opening');

      // Reset leaves stack
      currentPage = 0;
      isPageTurning = false;
      leafEls.forEach((leaf, idx) => {
        leaf.classList.remove('is-turned', 'is-turning');
        leaf.style.zIndex = reasons.length - idx;
      });

      updateLeftPage(0);
      updateProgress();

      show(openBookEl);
       show(navControls);
      hide(closeCta);
        updateNavButtons();

      bookState = 'reading';
      openBookEl.focus();
    }, 800);
  }

  function doCloseBook() {
    if (bookState !== 'reading' && bookState !== 'opening') return;
    bookState = 'closing';

    playFlipSound();

    // Cinematic closing animation on open spread
    openBookEl.classList.add('is-closing');
    hide(navControls);
    hide(closeCta);

    setTimeout(() => {
      openBookEl.classList.remove('is-closing');
      hide(openBookEl);

      // Reveal closed book in completed state
      show(closedBook);
      closedBook.classList.remove('is-opening');
      closedBook.classList.add('is-done');

      // Reveal Replay CTA


      // Celebrate finale
      launchConfetti();
      playFinaleChime();
      spawnHearts(window.innerWidth / 2, window.innerHeight / 2, 14);

      bookState = 'done';
    }, 750);
  }

function nextPage() {
  if (bookState !== 'reading' || isPageTurning) return;

  // Last page
  if (currentPage >= reasons.length - 1) {
    show(closeCta);
    return;
  }

  isPageTurning = true;

  const nextPageIndex = currentPage + 1;
  const leaf = leafEls[currentPage];

  // Page flip + sound শুরু একই click-এ
  leaf.style.zIndex = 100;
  leaf.classList.add('is-turning');
  void leaf.offsetHeight;
  leaf.classList.add('is-turned');

  playFlipSound();

  // Page flip-এর সাথে photo/content একসাথে change
  currentPage = nextPageIndex;
  updateLeftPage(currentPage);
  updateProgress();
  updateNavButtons();

  spawnHearts(
    window.innerWidth / 2,
    window.innerHeight / 2 - 40,
    6
  );

  // শুধু animation শেষ হওয়ার জন্য lock রাখা
  setTimeout(() => {
    leaf.classList.remove('is-turning');
    updateZIndices();
    isPageTurning = false;
  }, 1150);
}

  function prevPage() {
    if (bookState !== 'reading' || isPageTurning || currentPage <= 0) return;

    isPageTurning = true;
    currentPage--;
    const leaf = leafEls[currentPage];
    leaf.style.zIndex = 100;

    leaf.classList.add('is-turning');
    setTimeout(() => { leaf.classList.remove('is-turned'); }, 20);
    playFlipSound();

    setTimeout(() => {
      updateLeftPage(currentPage);
      updateProgress();
      updateNavButtons();
    }, 550);

    setTimeout(() => {
      leaf.classList.remove('is-turning');
      updateZIndices();
      isPageTurning = false;
    }, 1150);
  }

  function restartBook() {
    leafEls.forEach((leaf, idx) => {
      leaf.classList.remove('is-turned', 'is-turning');
      leaf.style.zIndex = reasons.length - idx;
    });
    currentPage = 0;
    hide(closeCta);
    closedBook.classList.remove('is-done');
    bookState = 'intro';
    doOpenBook();
  }

  // ─── 8. Web Audio Music Box & Sound Effects ─────────────────────────
  let audioCtx = null, melTimer = null, melStep = 0;
  const MELODY = [
    { f: 523.25, d: 0.42 }, { f: 659.25, d: 0.42 }, { f: 783.99, d: 0.65 }, { f: 659.25, d: 0.42 },
    { f: 880.00, d: 0.82 }, { f: 783.99, d: 0.52 }, { f: 659.25, d: 0.52 }, { f: 587.33, d: 0.92 },
    { f: 523.25, d: 0.42 }, { f: 659.25, d: 0.42 }, { f: 783.99, d: 0.65 }, { f: 1046.5, d: 0.92 },
    { f: 987.77, d: 0.52 }, { f: 783.99, d: 0.52 }, { f: 880.00, d: 1.15 }
  ];

  function initAudio() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx?.state === 'suspended') audioCtx.resume();
  }

  function playNote(freq, dur, vol = 0.04) {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator(), g = audioCtx.createGain();
      osc.type = 'sine'; osc.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(vol, now); g.gain.exponentialRampToValueAtTime(0.0001, now + dur + 0.8);
      osc.connect(g); g.connect(audioCtx.destination); osc.start(now); osc.stop(now + dur + 0.85);

      const o2 = audioCtx.createOscillator(), g2 = audioCtx.createGain();
      o2.type = 'triangle'; o2.frequency.setValueAtTime(freq * 2, now);
      g2.gain.setValueAtTime(vol * 0.32, now); g2.gain.exponentialRampToValueAtTime(0.0001, now + dur + 0.4);
      o2.connect(g2); g2.connect(audioCtx.destination); o2.start(now); o2.stop(now + dur + 0.45);
    } catch (e) {}
  }

  function nextMelNote() {
    if (!soundEnabled || !audioCtx) return;
    const n = MELODY[melStep % MELODY.length]; melStep++;
    playNote(n.f, n.d);
    melTimer = setTimeout(nextMelNote, (n.d + 0.42) * 1000);
  }

  function startMelody() {
    if (melTimer) return;
    initAudio();
    if (!audioCtx) return;
    melStep = 0;
    nextMelNote();
  }

  function stopMelody() {
    if (melTimer) { clearTimeout(melTimer); melTimer = null; }
  }

  function playFlipSound() {
    if (!soundEnabled) return;
    try {
      initAudio(); if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const sz = Math.floor(audioCtx.sampleRate * 0.25);
      const buf = audioCtx.createBuffer(1, sz, audioCtx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < sz; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.07));
      const src = audioCtx.createBufferSource(); src.buffer = buf;
      const flt = audioCtx.createBiquadFilter(); flt.type = 'bandpass'; flt.frequency.setValueAtTime(850, now); flt.Q.value = 1.6;
      const g = audioCtx.createGain(); g.gain.setValueAtTime(0.2, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      src.connect(flt); flt.connect(g); g.connect(audioCtx.destination); src.start(now); src.stop(now + 0.28);
      playNote(220, 0.16, 0.07);
    } catch (e) {}
  }

  function playFinaleChime() {
    if (!soundEnabled) return;
    initAudio(); if (!audioCtx) return;
    [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98].forEach((f, i) => {
      setTimeout(() => playNote(f, 1.3, 0.12), i * 125);
    });
  }

  function setSoundUI() {
    soundEnabled = true;
    startMelody();
  }

  // ─── 9. Ambient Canvas (Stars, Bokeh, Rose Petals) ──────────────────
  const ambCvs = document.getElementById('ambient-canvas');
  const ambCtx = ambCvs.getContext('2d');
  let AW = 0, AH = 0, stars = [], bokeh = [], petals = [];
  const BCLR = ['rgba(194,24,91,.13)', 'rgba(255,215,0,.09)', 'rgba(233,30,99,.12)', 'rgba(248,187,208,.12)', 'rgba(171,71,188,.11)'];

  function resizeAmb() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    AW = window.innerWidth; AH = window.innerHeight;
    ambCvs.width = AW * dpr; ambCvs.height = AH * dpr;
    ambCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initAmbParts();
  }

  function initAmbParts() {
    stars = Array.from({ length: 110 }, () => ({
      x: Math.random() * AW, y: Math.random() * AH,
      r: 0.5 + Math.random() * 1.3, a: Math.random(),
      spd: 0.012 + Math.random() * 0.023, max: 0.3 + Math.random() * 0.5
    }));
    bokeh = Array.from({ length: Math.min(55, Math.floor((AW + AH) / 28)) }, () => ({
      x: Math.random() * AW, y: Math.random() * AH,
      r: 5 + Math.random() * 24, color: BCLR[Math.floor(Math.random() * BCLR.length)],
      vy: 0.1 + Math.random() * 0.35, phase: Math.random() * Math.PI * 2,
      spd: 0.007 + Math.random() * 0.012, amp: 0.35 + Math.random() * 0.85
    }));
    petals = Array.from({ length: Math.min(18, Math.floor(AW / 55)) }, () => newPetal(false));
  }

  function newPetal(reset = true) {
    return {
      x: Math.random() * AW, y: reset ? -30 : Math.random() * AH,
      sz: 11 + Math.random() * 14, vy: 0.5 + Math.random() * 0.9, vx: 0.2 + Math.random() * 0.5,
      ang: Math.random() * Math.PI * 2, angSpd: (Math.random() - 0.5) * 0.026,
      flip: Math.random() * Math.PI * 2, flipSpd: 0.016 + Math.random() * 0.026,
      sway: Math.random() * Math.PI * 2, swaySpd: 0.012 + Math.random() * 0.016,
      op: 0.4 + Math.random() * 0.4
    };
  }

  function drawPetal(p) {
    ambCtx.save();
    ambCtx.translate(p.x, p.y); ambCtx.rotate(p.ang); ambCtx.scale(1, Math.cos(p.flip));
    ambCtx.globalAlpha = p.op;
    const g = ambCtx.createLinearGradient(-p.sz / 2, -p.sz / 2, p.sz / 2, p.sz / 2);
    g.addColorStop(0, '#ff4081'); g.addColorStop(0.5, '#c2185b'); g.addColorStop(1, '#880e4f');
    ambCtx.fillStyle = g;
    ambCtx.beginPath();
    ambCtx.moveTo(0, -p.sz * 0.8);
    ambCtx.bezierCurveTo(p.sz * 0.7, -p.sz * 0.6, p.sz * 0.9, p.sz * 0.4, 0, p.sz * 0.8);
    ambCtx.bezierCurveTo(-p.sz * 0.9, p.sz * 0.4, -p.sz * 0.7, -p.sz * 0.6, 0, -p.sz * 0.8);
    ambCtx.fill(); ambCtx.restore();
  }

  function renderAmb() {
    ambCtx.clearRect(0, 0, AW, AH);
    for (const s of stars) {
      s.a += s.spd;
      const a = (Math.sin(s.a) + 1) * 0.5 * s.max;
      ambCtx.beginPath(); ambCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ambCtx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`; ambCtx.fill();
    }
    for (const b of bokeh) {
      b.y -= b.vy; b.phase += b.spd; b.x += Math.sin(b.phase) * b.amp;
      if (b.y < -b.r * 2) { b.y = AH + b.r * 2; b.x = Math.random() * AW; }
      ambCtx.beginPath(); ambCtx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ambCtx.fillStyle = b.color; ambCtx.fill();
    }
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.vy; p.sway += p.swaySpd; p.x += Math.sin(p.sway) * p.vx;
      p.ang += p.angSpd; p.flip += p.flipSpd;
      if (p.y > AH + 40) { petals[i] = newPetal(true); }
      drawPetal(p);
    }
    requestAnimationFrame(renderAmb);
  }

  // ─── 10. Cursor Sparkles ────────────────────────────────────────────
  const curCvs = document.getElementById('cursor-canvas');
  const curCtx = curCvs.getContext('2d');
  let curPts = []; let curAF = null;
  const CCLR = ['#ffd700', '#ff80ab', '#fff', '#f48fb1', '#e91e63'];

  function resizeCur() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    curCvs.width = window.innerWidth * dpr; curCvs.height = window.innerHeight * dpr;
    curCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('pointermove', e => {
    if (curPts.length > 60) return;
    curPts.push({
      x: e.clientX + (Math.random() * 8 - 4), y: e.clientY + (Math.random() * 8 - 4),
      r: 1.4 + Math.random() * 2.8, color: CCLR[Math.floor(Math.random() * CCLR.length)],
      alpha: 0.9, vx: (Math.random() - 0.5) * 1.3, vy: (Math.random() - 0.5) * 1.3 - 0.35,
      decay: 0.026 + Math.random() * 0.016
    });
    if (!curAF) animateCur();
  }, { passive: true });

  function animateCur() {
    curCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = curPts.length - 1; i >= 0; i--) {
      const p = curPts[i];
      p.x += p.vx; p.y += p.vy; p.alpha -= p.decay;
      if (p.alpha <= 0) { curPts.splice(i, 1); continue; }
      curCtx.save(); curCtx.globalAlpha = p.alpha; curCtx.fillStyle = p.color;
      curCtx.shadowColor = p.color; curCtx.shadowBlur = 5;
      curCtx.beginPath(); curCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2); curCtx.fill(); curCtx.restore();
    }
    curAF = curPts.length ? requestAnimationFrame(animateCur) : null;
    if (!curPts.length) curCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  // ─── 11. Grand Finale Confetti ──────────────────────────────────────
  const cfCvs = document.getElementById('confetti-canvas');
  const cfCtx = cfCvs.getContext('2d');
  let cfPts = []; let cfAF = null;
  const CFCLR = ['#ff4d6d', '#ffd700', '#f8bbd0', '#c2185b', '#fff', '#e1bee7', '#ff85a1', '#ffb74d'];

  function resizeCf() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cfCvs.width = window.innerWidth * dpr; cfCvs.height = window.innerHeight * dpr;
    cfCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function launchConfetti() {
    resizeCf(); cfPts = [];
    const cW = window.innerWidth, cH = window.innerHeight;
    for (let i = 0; i < 160; i++) {
      cfPts.push({
        x: Math.random() * cW, y: -20 - Math.random() * 80,
        sz: 5 + Math.random() * 8, color: CFCLR[Math.floor(Math.random() * CFCLR.length)],
        vx: (Math.random() - 0.5) * 5.2, vy: 2.3 + Math.random() * 4.8,
        rot: Math.random() * Math.PI * 2, rotSpd: (Math.random() - 0.5) * 0.12,
        shape: Math.random() > 0.35 ? 'rect' : 'heart', op: 1, life: 0,
        maxLife: 220 + Math.random() * 80
      });
    }
    if (cfAF) cancelAnimationFrame(cfAF);
    animateCf();
  }

  function animateCf() {
    const cW = window.innerWidth, cH = window.innerHeight;
    cfCtx.clearRect(0, 0, cW, cH);
    let alive = 0;
    for (const p of cfPts) {
      p.life++; p.x += p.vx; p.y += p.vy; p.rot += p.rotSpd; p.vx *= 0.99;
      if (p.life > p.maxLife * 0.7) p.op = Math.max(0, 1 - (p.life - p.maxLife * 0.7) / (p.maxLife * 0.3));
      if (p.op > 0 && p.y < cH + 50) {
        alive++; cfCtx.save(); cfCtx.translate(p.x, p.y); cfCtx.rotate(p.rot);
        cfCtx.globalAlpha = p.op; cfCtx.fillStyle = p.color;
        if (p.shape === 'rect') {
          cfCtx.fillRect(-p.sz / 2, -p.sz / 3, p.sz, p.sz * 0.62);
        } else {
          const s = p.sz * 0.58;
          cfCtx.beginPath(); cfCtx.moveTo(0, -s / 2);
          cfCtx.bezierCurveTo(-s, -s * 1.2, -s * 1.4, s * 0.4, 0, s * 1.2);
          cfCtx.bezierCurveTo(s * 1.4, s * 0.4, s, -s * 1.2, 0, -s / 2);
          cfCtx.fill();
        }
        cfCtx.restore();
      }
    }
    cfAF = alive ? requestAnimationFrame(animateCf) : null;
    if (!alive) cfCtx.clearRect(0, 0, cW, cH);
  }

  // ─── 12. Floating Hearts ────────────────────────────────────────────
  const HEARTS = ['❤️', '💖', '💕', '✨', '🌹', '💗'];
  function spawnHearts(x, y, count = 6) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div'); el.className = 'heart-particle';
      el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      el.style.left = `${x + (Math.random() * 44 - 22)}px`;
      el.style.top = `${y + (Math.random() * 30 - 15)}px`;
      el.style.setProperty('--dx', (Math.random() * 150 - 75) + 'px');
      el.style.setProperty('--dur', (1.6 + Math.random() * 0.65) + 's');
      el.style.setProperty('--r0', (Math.random() * 28 - 14) + 'deg');
      el.style.setProperty('--r1', (Math.random() * 38 - 19) + 'deg');
      el.style.setProperty('--r2', (Math.random() * 55 - 27) + 'deg');
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }
  }

  // ─── 13. Fixed four-page content ───────────────────────────────────
  function loadReasons() {
    return JSON.parse(JSON.stringify(DEFAULT_REASONS.slice(0, 4)));
  }
  // ─── 14. Keyboard & Touch Controls ──────────────────────────────────
  function initKeyboard() {
    window.addEventListener('keydown', e => {
      const sp = (e.code === 'Space' || e.key === ' ' || e.key === 'Spacebar');
      if (sp) e.preventDefault();

      if (sp || e.key === 'ArrowRight') {
        e.preventDefault();
        if (bookState === 'intro' || bookState === 'done') doOpenBook();
        else if (bookState === 'reading') nextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (bookState === 'reading') prevPage();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (bookState === 'intro' || bookState === 'done') doOpenBook();
      }
    });
  }

  let tx0 = 0, ty0 = 0;
  function initTouch() {
    document.addEventListener('touchstart', e => {
      tx0 = e.changedTouches[0].clientX; ty0 = e.changedTouches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - tx0, dy = e.changedTouches[0].clientY - ty0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) nextPage();
        if (navigator.vibrate) navigator.vibrate(22);
      }
    }, { passive: true });
  }

  // ─── 15. Event Listeners ────────────────────────────────────────────
  function wireEvents() {
    btnOpenBook.addEventListener('click', () => { btnOpenBook.blur(); doOpenBook(); });
    closedBook.addEventListener('click', e => { if (btnOpenBook.contains(e.target)) return; doOpenBook(); });
    closedBook.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doOpenBook(); } });

    btnNext.addEventListener('click', () => { btnNext.blur(); nextPage(); });
    window.addEventListener('resize', () => { resizeAmb(); resizeCur(); resizeCf(); });
  }

// ─── 16. Initialization ─────────────────────────────────────────────
function init() {
  // Default intro state
  hide(openBookEl);
  hide(navControls);
  hide(closeCta);
  createLeaves();
  setSoundUI();
  initKeyboard();
  initTouch();
  wireEvents();

  resizeAmb();
  resizeCur();
  renderAmb();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
document.body.classList.add('app-ready');
