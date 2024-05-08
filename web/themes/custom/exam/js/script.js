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
    if (burgerMenuList.style.display === 'none' || burgerMenuList.style.display === '') {
      burgerMenuList.style.transform = 'translateX(0)';
      overlay.style.display = 'block';
    } else {
      burgerMenuList.style.transform = 'translateX(100%)';
      overlay.style.display = 'none';
    }
  });
});
