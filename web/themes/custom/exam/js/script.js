document.addEventListener('DOMContentLoaded', function() {
  function addSocialMediaLinksToBurgerMenu() {
    function hasSocialMediaBlockInBurgerMenu() {
      const socialMediaBlock = document.getElementById('block-exam-socialmedialinks');
      if (!socialMediaBlock) return false;

      const navigationArea = document.querySelector('.cheeseburger-menu__main-navigation-area');
      if (!navigationArea) return false;

      let existingSocialMediaBlock = navigationArea.querySelector('#block-exam-socialmedialinks');
      if (window.innerWidth > 576) {
        if (existingSocialMediaBlock) {
          existingSocialMediaBlock.remove();
          existingSocialMediaBlock = null;
        }
      } else {
        if (!existingSocialMediaBlock) {
          existingSocialMediaBlock = socialMediaBlock.cloneNode(true);
          existingSocialMediaBlock.classList.add('duplicated');
          navigationArea.appendChild(existingSocialMediaBlock);

          const duplicatedLinks = existingSocialMediaBlock.querySelectorAll('a');
          duplicatedLinks.forEach(link => {
            link.addEventListener('click', (event) => {
              const isExtLink = isExternal(event.currentTarget);

              if (isExtLink) {
                event.preventDefault();
                window.open(event.currentTarget.href, '_blank');
              }
            });
          });
        } else {
          existingSocialMediaBlock.classList.add('duplicated');
        }
      }

      return true;
    }

    function checkAndAddBlock() {
      hasSocialMediaBlockInBurgerMenu();
    }

    checkAndAddBlock();
    window.addEventListener('resize', checkAndAddBlock);
  }

  window.onload = function () {
    addSocialMediaLinksToBurgerMenu();
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  function isExternal(link) {
    const currentDomain = window.location.hostname;
    const targetDomain = link.hostname;
    return targetDomain && targetDomain !== currentDomain && !targetDomain.endsWith(currentDomain);
  }

  function handleLinkClick(link) {
    const isExtLink = isExternal(link);

    if (isExtLink) {
      event.preventDefault();
      window.open(link.href, '_blank');
    }
  }

  function checkForNewLinks() {
    const allLinks = document.querySelectorAll('a'); // Отримуємо всі посилання
    allLinks.forEach(link => {
      link.classList.add('processed'); // Додаємо клас "processed" для всіх посилань
      link.addEventListener('click', () => handleLinkClick(link));
    });
  }

  links.forEach(link => {
    link.classList.add('processed');
    link.addEventListener('click', () => handleLinkClick(link));
  });

  window.addEventListener('resize', checkForNewLinks);
}); 
