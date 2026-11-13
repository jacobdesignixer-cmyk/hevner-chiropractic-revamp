/**
 * Hevner Chiropractic Center - Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Shadow on Scroll
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 2. Active Nav Link on Scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  const onScrollNavHighlight = () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', onScrollNavHighlight);

  // 3. Mobile Navigation Drawer
  const mobileToggleOpen = document.getElementById('mobileMenuOpen');
  const mobileToggleClose = document.getElementById('mobileMenuClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileDrawer.classList.add('active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (mobileToggleOpen) mobileToggleOpen.addEventListener('click', openMobileMenu);
  if (mobileToggleClose) mobileToggleClose.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 4. Modal Appointment Request
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalButtons = document.querySelectorAll('.open-booking-modal');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (mobileDrawer.classList.contains('active')) closeMobileMenu();
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = bookingModal.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  };

  const closeModal = () => {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openModalButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (bookingModal.classList.contains('active')) closeModal();
      if (mobileDrawer.classList.contains('active')) closeMobileMenu();
    }
  });

  // 5. Booking Forms Submission
  const homepageForm = document.getElementById('homepageBookingForm');
  const homepageSuccess = document.getElementById('formSuccessMessage');

  if (homepageForm) {
    homepageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      homepageForm.style.display = 'none';
      if (homepageSuccess) homepageSuccess.style.display = 'block';
    });
  }

  const modalForm = document.getElementById('modalBookingForm');
  const modalSuccess = document.getElementById('modalSuccessMessage');

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modalForm.style.display = 'none';
      if (modalSuccess) modalSuccess.style.display = 'block';
    });
  }

  // 6. Smooth Scroll with offset for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
