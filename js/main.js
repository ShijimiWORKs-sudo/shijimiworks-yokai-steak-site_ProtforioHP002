/* =========================================================
   HIRAMEKI — interactions
   ========================================================= */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Lenis smooth scroll ---- */
  var lenis = null;
  if (!reduce && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    (function raf(t){ lenis.raf(t); requestAnimationFrame(raf); })();
    if (typeof ScrollTrigger !== 'undefined') lenis.on('scroll', ScrollTrigger.update);
  }

  /* ---- Mobile menu ---- */
  var burger = document.getElementById('burger');
  var sheet = document.getElementById('msheet');
  function closeMenu(){ document.body.classList.remove('menu-open'); if (lenis) lenis.start(); }
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    if (lenis) { open ? lenis.stop() : lenis.start(); }
  });
  sheet.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ---- Anchor smooth scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(t, { offset: -74, duration: 1.1 });
      else t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.qa').forEach(function (qa) {
    var q = qa.querySelector('.qa__q');
    var a = qa.querySelector('.qa__a');
    q.addEventListener('click', function () {
      var open = qa.classList.toggle('is-open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      if (lenis) setTimeout(function(){ if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 420);
    });
  });

  /* ---- Contact form (demo) ---- */
  var form = document.getElementById('cform');
  var note = document.getElementById('cnote');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (!d.get('name') || !d.get('email') || !d.get('message')) {
      note.textContent = '⚠ 必須（*）の項目をうめてね。';
      note.style.color = '#ff3d8b';
      return;
    }
    note.textContent = '✦ 送信しました！ありがとう（※これはデモ用フォームです）';
    note.style.color = '#7c4dff';
    form.reset();
  });

  /* ---- GSAP ---- */
  function fallback(){ document.querySelectorAll('.reveal').forEach(function (el){ el.style.opacity = 1; el.style.transform = 'none'; }); }
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || reduce) { fallback(); return; }
  gsap.registerPlugin(ScrollTrigger);

  // pop-in reveals
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, y: 0, rotate: 0, duration: 0.7, ease: 'back.out(1.6)',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  // counters
  gsap.utils.toArray('.chip__num').forEach(function (el) {
    var target = +el.dataset.count, obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: function () {
        gsap.to(obj, { v: target, duration: 1.6, ease: 'power2.out',
          onUpdate: function () { el.textContent = Math.floor(obj.v).toLocaleString(); } });
      }
    });
  });

  ScrollTrigger.refresh();
})();
