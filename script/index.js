const logout = document.getElementsByClassName('header-logout_icon')[0];
const logutDrop = document.getElementsByClassName('header-logout')[0];

function openLogout() {
  if (logutDrop.classList.contains('open-drop')) {
    return logutDrop.classList.remove('open-drop');
  }
  logutDrop.classList.add('open-drop');
}

logout.addEventListener('click', openLogout);
