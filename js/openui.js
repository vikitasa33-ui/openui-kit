/*!
 * OpenUI Kit — JavaScript
 * Version: 1.0.0
 * License: MIT
 */

(function () {
  'use strict';

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Dismiss alerts on click ----
  document.querySelectorAll('.alert').forEach(alert => {
    alert.style.cursor = 'pointer';
    alert.title = 'Click to dismiss';
    alert.addEventListener('click', () => {
      alert.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      alert.style.opacity = '0';
      alert.style.transform = 'translateX(10px)';
      setTimeout(() => alert.remove(), 350);
    });
  });

  // ---- Animate sections on scroll ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });

  // ---- Button ripple effect ----
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (this.disabled || this.classList.contains('btn-loading')) return;
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        border-radius:50%;background:rgba(255,255,255,0.18);
        top:${e.clientY - rect.top - size/2}px;
        left:${e.clientX - rect.left - size/2}px;
        transform:scale(0);animation:ripple 0.5s ease;
        pointer-events:none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Inject ripple keyframes
  const style = document.createElement('style');
  style.textContent = '@keyframes ripple{to{transform:scale(2.5);opacity:0}}';
  document.head.appendChild(style);

  console.log('%c OpenUI Kit v1.0.0 loaded ✦', 'color:#6c63ff;font-weight:bold;font-size:14px;');
})();
