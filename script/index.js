const logout = document.getElementsByClassName('header-logout_icon')[0];
const logutDrop = document.getElementsByClassName('header-logout')[0];

function openLogout() {
  if (logutDrop.classList.contains('open-drop')) {
    return logutDrop.classList.remove('open-drop');
  }
  logutDrop.classList.add('open-drop');
}

logout.addEventListener('click', openLogout);


const mobButton = document.getElementsByClassName('mobile-menu_button')[0];
const mobMenu = document.getElementsByClassName('dahsboard-navigation_mobile')[0];
const menuItems = document.querySelectorAll('.navigation-list_link');

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

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});