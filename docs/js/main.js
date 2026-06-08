document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ── Mobile nav toggle ─────────────────────────
  const burger   = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileNav.classList.remove('open'))
    );
  }

  // ── Active nav link ───────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ── Scroll reveal ─────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  }

  // ── Pre-select service from URL param ─────────
  const params = new URLSearchParams(location.search);
  const svcParam = params.get('service');
  if (svcParam) {
    const sel = document.getElementById('service');
    if (sel) sel.value = svcParam;
  }

});
