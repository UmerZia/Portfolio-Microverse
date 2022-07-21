const hamburger = () => {
  const hamburgerMenuOpen = document.getElementsByClassName('navbar__hamburger');
  const hamburgerMenuExit = document.getElementsByClassName('navbar__opt--cross');
  const hamburgerMenuListItems = document.getElementsByClassName(
    'navbar__opt__list--item',
  );

  hamburgerMenuOpen[0].addEventListener('click', () => {
    document.getElementsByClassName('navbar__opt')[0].style.display = 'flex';
  });

  hamburgerMenuExit[0].addEventListener('click', () => {
    document.getElementsByClassName('navbar__opt')[0].style.display = 'none';
  });

  [...hamburgerMenuListItems].forEach((item) => {
    item.addEventListener('click', () => {
      document.getElementsByClassName('navbar__opt')[0].style.display = 'none';
    });
  });
};

hamburger();
