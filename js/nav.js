/* Shared nav + scroll-reveal logic for emmahudelson.com
 *
 * Markup contract (see /partials/nav.html):
 *   #navToggle   — the mobile hamburger button
 *   #navLinks    — the <ul> of nav links (gets .open at max-width: 900px)
 *
 * Scroll reveal contract (see /css/site.css):
 *   .reveal      — fades in once scrolled into view (.visible added)
 *   .stagger     — same, with children using transition-delay
 */
(function () {
  // --- Mobile nav toggle ---------------------------------------------------
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (toggle && links) {
    const setOpen = (open) => {
      toggle.classList.toggle('open', open);
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', () => {
      setOpen(!toggle.classList.contains('open'));
    });

    // Close on link click (for same-page hash nav and mobile tap-through)
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setOpen(false));
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // --- Scroll reveal -------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );

    document
      .querySelectorAll('.reveal, .stagger')
      .forEach((el) => observer.observe(el));
  } else {
    // Fallback: reveal everything immediately
    document
      .querySelectorAll('.reveal, .stagger')
      .forEach((el) => el.classList.add('visible'));
  }
})();
