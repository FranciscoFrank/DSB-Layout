document.addEventListener('DOMContentLoaded', function() {
  var burgerMenuIcon = document.getElementById('block-burger-menu-icon');
  var burgerMenuList = document.getElementById('block-burger-menu-list');
  var overlay = document.createElement('div');

  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
  overlay.style.zIndex = '98';
  overlay.style.display = 'none';

  document.body.appendChild(overlay);

  burgerMenuIcon.addEventListener('click', function() {
    if (burgerMenuList.style.transform === 'translateX(0)') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function openMenu() {
    burgerMenuList.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
    document.addEventListener('click', closeMenuOutside);
  }

  function closeMenu() {
    burgerMenuList.style.transform = 'translateX(150%)';
    overlay.style.display = 'none';
    document.removeEventListener('click', closeMenuOutside);
  }

  function closeMenuOutside(event) {
    if (!burgerMenuList.contains(event.target) && event.target !== burgerMenuIcon && !burgerMenuIcon.contains(event.target)) {
      closeMenu();
    }
  }
});
