/* в этот файл добавляет скрипты*/
const toggleButton = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav__wrapper');

toggleButton.onclick = () => {
  toggleButton.classList.toggle('main-header__toggle--is-opened');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
};
