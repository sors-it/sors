const mobButton = document.getElementsByClassName('mobile-menu_button')[0];
const mobMenu = document.getElementsByClassName('header-controls')[0];

function toggleMenu() {
  if (mobMenu.classList.contains('show-menu')) {
    mobMenu.classList.remove('show-menu');
    mobButton.classList.remove('active');
    document.body.style.overflow = '';
    return true
  }
  mobMenu.classList.add('show-menu');
  mobButton.classList.add('active');
  document.body.style.overflow = 'hidden';
}

mobButton.addEventListener('click', toggleMenu);