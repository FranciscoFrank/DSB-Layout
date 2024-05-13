document.addEventListener('DOMContentLoaded', function() {
  function addSocialMediaLinksToBurgerMenu() {
    function hasSocialMediaBlockInBurgerMenu() {
      const socialMediaBlock = document.getElementById('block-exam-socialmedialinks');
      if (!socialMediaBlock) return false;

      const navigationArea = document.querySelector('.cheeseburger-menu__main-navigation-area');
      if (!navigationArea) return false;

      let existingSocialMediaBlock = navigationArea.querySelector('#block-exam-socialmedialinks');
      if (!existingSocialMediaBlock) {
        existingSocialMediaBlock = socialMediaBlock.cloneNode(true);
        existingSocialMediaBlock.classList.add('duplicated');
        navigationArea.appendChild(existingSocialMediaBlock);
      } else {
        existingSocialMediaBlock.classList.add('duplicated');
      }

      return true;
    }

    function checkAndAddBlock() {
      if (window.innerWidth <= 576 && !hasSocialMediaBlockInBurgerMenu()) {
        const socialMediaBlock = document.getElementById('block-exam-socialmedialinks');
        if (!socialMediaBlock) return;

        const navigationArea = document.querySelector('.cheeseburger-menu__main-navigation-area');
        if (!navigationArea) return;

        navigationArea.appendChild(socialMediaBlock);
      }
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

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const isExtLink = isExternal(event.currentTarget);

      if (isExtLink) {
        event.preventDefault();
        window.open(event.currentTarget.href, '_blank');
      }
    });
  });
});

