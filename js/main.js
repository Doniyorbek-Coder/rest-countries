let theme = document.getElementById('theme-mode');
let button = document.getElementById('button');
let n = 0;
function changeTheme() {
  if (n == 0) {
    button.style.backgroundImage='url(../images/searchblack.png)';
    theme.innerHTML = 'Light Mode';
    document.documentElement.style.setProperty('--black', '#ffffff');
    document.documentElement.style.setProperty('--body-bg', '#202c36');
    document.documentElement.style.setProperty('--white', '#2B3844');
    n = 1
  } else {
    button.style.backgroundImage='url(../images/search.png)';
    theme.innerHTML = 'Dark Mode';
    document.documentElement.style.setProperty('--black', '#191919');
    document.documentElement.style.setProperty('--body-bg', '#f2f2f2');
    document.documentElement.style.setProperty('--white', '#ffffff');
    n = 0
  }
}
