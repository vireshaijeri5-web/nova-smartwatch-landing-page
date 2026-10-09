/**
 * NOVA Pulse X — Main Application Scripts
 * Web Development Week 02 Minor Project
 * Author: Viresh Ijeri
 * 
 * Features:
 * 1. Mobile Hamburger Menu Toggle & Accessibility
 * 2. Accessible FAQ Accordion with ARIA States
 * 3. Interactive Educational Demo Purchase Modal
 * 4. Interactive Watch Face Preview Switcher
 * 5. Dynamic Navigation Active Indicator on Scroll
 * 6. Keyboard Navigation & Accessibility Handlers
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Mobile Menu Toggle
  // -------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileMenu) return;
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const shouldOpen = forceClose ? false : !isExpanded;

    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    if (shouldOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(true);
    });
  });

  // -------------------------------------------------------------
  // 2. FAQ Accordion Interaction
  // -------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const headerBtn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (headerBtn && content) {
      headerBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other items for clean single-accordion UX
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          headerBtn.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          headerBtn.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // -------------------------------------------------------------
  // 3. Educational Demo Purchase Modal
  // -------------------------------------------------------------
  const buyButtons = document.querySelectorAll('.btn-buy-demo');
  const demoModal = document.getElementById('demo-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalUnderstoodBtn = document.getElementById('modal-understood-btn');
  const modalOverlay = document.getElementById('modal-overlay');

  function openDemoModal() {
    if (!demoModal) return;
    demoModal.classList.remove('hidden');
    demoModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    modalUnderstoodBtn?.focus();
  }

  function closeDemoModal() {
    if (!demoModal) return;
    demoModal.classList.add('hidden');
    demoModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDemoModal();
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDemoModal);
  if (modalUnderstoodBtn) modalUnderstoodBtn.addEventListener('click', closeDemoModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeDemoModal);

  // -------------------------------------------------------------
  // 4. Interactive Watch Face Switcher (Showcase Section)
  // -------------------------------------------------------------
  const faceButtons = document.querySelectorAll('.face-selector-btn');
  const showcaseImage = document.getElementById('showcase-main-img');
  const faceTitle = document.getElementById('face-title');
  const faceDescription = document.getElementById('face-desc');

  const faceData = {
    'amber-analog': {
      title: 'Amber Minimalist Analog',
      desc: 'Elegant neon indices with precision hour markers tailored for formal settings and clean readability.',
      src: './assets/images/nova-faces.jpg'
    },
    'cyber-metric': {
      title: 'Aura Cyber Fitness HUD',
      desc: 'High-contrast real-time activity metrics including live step tracker, heart rate monitor, and active calories.',
      src: './assets/images/nova-hero.jpg'
    },
    'dark-slate': {
      title: 'Obsidian Dual Chrono',
      desc: 'Sophisticated dual-timezone sub-dials with integrated battery gauge and calendar synchronization.',
      src: './assets/images/nova-showcase.jpg'
    }
  };

  faceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      faceButtons.forEach(b => {
        b.classList.remove('border-nova-accent', 'text-white', 'bg-nova-elevated');
        b.classList.add('border-nova-border', 'text-nova-muted');
      });

      btn.classList.add('border-nova-accent', 'text-white', 'bg-nova-elevated');
      btn.classList.remove('border-nova-border', 'text-nova-muted');

      const faceKey = btn.getAttribute('data-face');
      if (faceData[faceKey] && showcaseImage) {
        // Smooth transition effect
        showcaseImage.style.opacity = '0.3';
        setTimeout(() => {
          showcaseImage.src = faceData[faceKey].src;
          if (faceTitle) faceTitle.textContent = faceData[faceKey].title;
          if (faceDescription) faceDescription.textContent = faceData[faceKey].desc;
          showcaseImage.style.opacity = '1';
        }, 180);
      }
    });
  });

  // -------------------------------------------------------------
  // 5. Active Section Indicator on Scroll
  // -------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-nova-accent', 'font-semibold');
          link.classList.add('text-nova-muted');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-nova-accent', 'font-semibold');
            link.classList.remove('text-nova-muted');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // -------------------------------------------------------------
  // 6. Global Escape Key Listener for Modals & Mobile Menu
  // -------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDemoModal();
      toggleMobileMenu(true);
    }
  });
});
