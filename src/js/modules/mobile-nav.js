function mobileNav() {
  const navBtnOpen = document.querySelector('#mobile-nav-btn');
  const nav = document.querySelector('.mobile-nav');
  const navBtnClose = document.querySelector('#mobile-nav__close');
  const mobileNavOverlay = document.querySelector('.mobile-nav__overlay');

  navBtnOpen.onclick = openMobileNav;
  navBtnClose.onclick = closeMobileNav;
  mobileNavOverlay.onclick = closeMobileNav;

  function closeMobileNav() {
    nav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.classList.toggle('no-scroll');
  }

  function openMobileNav() {
    nav.classList.add('active');
    mobileNavOverlay.classList.add('active');
    document.body.classList.toggle('no-scroll');
  }
}

export default mobileNav;
