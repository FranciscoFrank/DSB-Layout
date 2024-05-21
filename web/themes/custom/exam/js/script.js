// My own script for the theme.

// Script for cloning HTML structure for the Social Media Links module.
document.addEventListener('DOMContentLoaded', function() {

  // Function for adding social media links to the burger menu.
  function addSocialMediaLinksToBurgerMenu() {
    function hasSocialMediaBlockInBurgerMenu() {

      // Checking the presence of a social media block in the burger menu.
      const socialMediaBlock = document.getElementById('block-exam-socialmedialinks');
      if (!socialMediaBlock) return false;

      const navigationArea = document.querySelector('.cheeseburger-menu__main-navigation-area');
      if (!navigationArea) return false;

      let existingSocialMediaBlock = navigationArea.querySelector('#block-exam-socialmedialinks');

      // If the browser window width is greater than 576px, the social media block is removed from the HTML structure, and a variable is set to null.
      if (window.innerWidth > 576) {
        if (existingSocialMediaBlock) {
          existingSocialMediaBlock.remove();
          existingSocialMediaBlock = null;
        }
      }

      // If the window width is less than or equal to 576px, it checks if the social media block exists. If it doesn't, it clones the existing block, adds a new class, and adds this block to the burger menu.
      else {
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

    // Checking and adding a block.
    function checkAndAddBlock() {
      hasSocialMediaBlockInBurgerMenu();
    }

    checkAndAddBlock();
    window.addEventListener('resize', checkAndAddBlock);
  }

  // Calling the main function.
  window.onload = function () {
    addSocialMediaLinksToBurgerMenu();
  };
});

// Function for opening links that lead to external resources in another tab.
document.addEventListener('DOMContentLoaded', function() {

  // Getting all the links on the site.
  const links = document.querySelectorAll('a');

  // Checking links and their domains.
  function isExternal(link) {
    const currentDomain = window.location.hostname;
    const targetDomain = link.hostname;
    return targetDomain && targetDomain !== currentDomain && !targetDomain.endsWith(currentDomain);
  }

  // Checking the click on the link and checking the domain, if the domain is external then the link opens in another tab.
  function handleLinkClick(link) {
    const isExtLink = isExternal(link);

    if (isExtLink) {
      event.preventDefault();
      window.open(link.href, '_blank');
    }
  }

  // Processing all links to avoid re-checking and adding a click listener to them.
  function checkForNewLinks() {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
      link.classList.add('processed');
      link.addEventListener('click', () => handleLinkClick(link));
    });
  }

  // Loading functions when the page loads and the page width changes.
  checkForNewLinks();

  window.addEventListener('resize', checkForNewLinks);

  window.addEventListener('load', checkForNewLinks);
});

// Function for generating link text based on URL.
(function ($) {
  Drupal.behaviors.customNodeLinks = {
    attach: function (context, settings) {
      $('.node-link', context).once('customNodeLinks').each(function () {
        var $link = $(this);
        var href = $link.attr('href');

        // Logic for setting the name for the button based on the URL path it contains.
        if (href.indexOf('/about') !== -1) {
          $link.text('More details');
        } else if (href.indexOf('/team') !== -1) {
          $link.text('Look at me');
        } else if (href.indexOf('/projects') !== -1) {
          $link.text('Details');
        }
      });
    }
  };
})(jQuery);
