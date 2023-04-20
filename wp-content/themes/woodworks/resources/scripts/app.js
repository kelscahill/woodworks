import {domReady} from '@roots/sage/client';

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  /**
   * Set the active gallery image
   * 1) Set the active gallery image and cooresponding dot to display
   */
  function setActiveGalleryImage(images, index, dots) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('this-is-active');
      dots[i].classList.remove('this-is-active');
    }
    images[index].classList.add('this-is-active');
    dots[index].classList.add('this-is-active');
  }

  /**
   * Modal toggle active
   * 1) Toggle the active class on the body and modal
   */
  function modalToggleActive(id) {
    document.body.classList.toggle('modal-is-active');
    document.querySelector(`#js-modal-${id}`).classList.toggle('modal-is-active');
  }

  /**
   * Modal remove active
   * 1) Remove the active class on the body and modal
   */
  function modalRemoveActive(id) {
    document.body.classList.remove('modal-is-active');
    document.querySelector(`#js-modal-${id}`).classList.remove('modal-is-active');
  }

  /**
   * Modal buttons
   * 1) Remove the active state on the current modal
   * 2) Add the active state to the modal with the matching blockID
   */
  function modalButtons(el, activeId) {
    const blockId = el.getAttribute('block-id');
    modalRemoveActive(activeId);
    modalToggleActive(blockId);
  }

  /**
   * Gallery
   * 1) Select all the blocks on the page
   * 2) Get the ID of the block
   * 3) Toggle the modal on click of each trigger
   * 4) If clicked outside of modal container, then close the modal
   * 5) Select all the gallery images and dots
   * 6) Set the initial image & dot to active
   * 7) Add event listeners to the gallery next button
   * 8) Add event listeners to the gallery previous button
   * 9) Add event listeners to the modal next button
   * 10) Add event listeners to the modal previous button
   */
  function galleryBlocks() {
    const galleryBlocks = document.querySelectorAll('.c-block');
    if (galleryBlocks.length > 0) {
      galleryBlocks.forEach((block) => {
        /* 2 */
        const galleryBlockId = block.getAttribute('id');

        /* 3 */
        const triggers = block.querySelectorAll('.js-toggle-modal');
        triggers.forEach((trigger) => {
          trigger.addEventListener('click', () => {
            modalToggleActive(galleryBlockId);
          });
        });

        /* 4 */
        block.querySelector('.c-modal').addEventListener('click', (event) => {
          const isClickInside = block.querySelector('.c-modal__content').contains(event.target);
          if (!isClickInside) {
            modalRemoveActive(galleryBlockId);
          }
        });

        /* 5 */
        const galleryImages = block.querySelectorAll('.js-gallery-image');
        if (galleryImages.length > 0) {
          const galleryDots = block.querySelectorAll('.js-gallery-dot');
          let galleryIndex = 0;

          /* 6 */
          galleryImages[galleryIndex].classList.add('this-is-active');
          galleryDots[galleryIndex].classList.add('this-is-active');

          /* 7 */
          const galleryNext = block.querySelector('.js-gallery-next');
          if (galleryNext) {
            galleryNext.addEventListener('click', () => {
              galleryIndex++;
              if (galleryIndex >= galleryImages.length) {
                galleryIndex = 0;
              }
              setActiveGalleryImage(galleryImages, galleryIndex, galleryDots);
            });
          }

          /* 8 */
          const galleryPrev = block.querySelector('.js-gallery-prev');
          if (galleryPrev) {
            galleryPrev.addEventListener('click', () => {
              galleryIndex--;
              if (galleryIndex < 0) {
                galleryIndex = galleryImages.length - 1;
              }
              setActiveGalleryImage(galleryImages, galleryIndex, galleryDots);
            });
          }
        }

        /* 9 */
        const modalNext = block.querySelector('.js-modal-next');
        if (modalNext) {
          if (!modalNext.hasAttribute('block-id')) {
            modalNext.classList.add('is-disabled');
          } else {
            modalNext.addEventListener('click', () => {
              modalButtons(modalNext, galleryBlockId);
            });
          }
        }

        /* 10 */
        const modalPrev = block.querySelector('.js-modal-prev');
        if (modalPrev) {
          if (!modalPrev.hasAttribute('block-id')) {
            modalPrev.classList.add('is-disabled');
          } else {
            modalPrev.addEventListener('click', () => {
              modalButtons(modalPrev, galleryBlockId);
            });
          }
        }
      });
    }
  }
  galleryBlocks();
  jQuery(document).on('sf:ajaxfinish', () => {
    galleryBlocks();
    // All the gallery filter hash to the url when the search and filter is udpated
    window.history.pushState(null, null, '#gallery-filter');

    galleryFiltered();
  });

  function galleryFiltered() {
    // If the results are filtered, add a class to the section
    if (document.querySelector('#gallery-filter')) {
      if (window.location.search.includes('?_sft_category')) {
        document.querySelector('#gallery-filter').classList.add('is-filtered');
      } else {
        document.querySelector('#gallery-filter').classList.remove('is-filtered');
      }
    }
  }

  // jQuery(document).on('sf:ajaxfinish', function(event) {
  //   console.log(event);
  //   var search_query = event.detail.content.data.query;
  //   // Set the main query arguments based on the filtered query
  //   var args = {
  //     post_type: search_query.post_type,
  //     post_status: search_query.post_status,
  //     orderby: search_query.orderby,
  //     order: search_query.order,
  //     posts_per_page: search_query.posts_per_page,
  //     paged: search_query.paged,
  //     s: search_query.s,
  //     tax_query: search_query.tax_query,
  //     meta_query: search_query.meta_query,
  //   };

  //   // Update the main query with the filtered query
  //   jQuery.ajax({
  //     type: "GET",
  //     url: "/wp-admin/admin-ajax.php",
  //     data: {
  //       action: "update_main_query",
  //       args: args,
  //     },
  //     success: function(response){
  //       console.log(response);
  //     },
  //   });
  // });

  /**
   * IntersectionObserver for page sections
   * 1) Set active primary nav links if section is interseting
   * 2) Set the threshold value based on the window width
   * 3) Add active class from the observed element
   * 4) Remove active class from the previous active element
   * 5) Set the current active element to the observed element
   * 6) Observe when element is completely in view or partially in view
   * 7) Observe the sections on the page
   */

  /* 2 */
  let thresholdValue;
  if (window.innerWidth > 768) {
    thresholdValue = 0.7;
  } else {
    thresholdValue = 0;
  }

  let currentActive = null;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const sectionID = entry.target.getAttribute('ID');
      if (sectionID !== null && entry.isIntersecting) {
        /* 3 */
        document.querySelector('.js-primary-nav-link[href="/#'+sectionID+'"]').classList.add('this-is-active');
        if (currentActive && currentActive !== entry.target) {
          /* 4 */
          const currentActiveID = currentActive.getAttribute('ID');
          document.querySelector('.js-primary-nav-link[href="/#'+currentActiveID+'"]').classList.remove('this-is-active');
        }
        /* 5 */
        currentActive = entry.target;
      }
    });
  }, { threshold: [thresholdValue] }); /* 6 */

  /* 7 */
  const sections = document.querySelectorAll('section');
  if (sections.length > 0) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }

  /**
   * Set smooth scroll to
   * 1) On click of an anchor link, smooth scroll to the section
   * 2) Add hash value to URL
   */
  function setSmoothScrollTo(sectionId) {
    const navHeight = document.querySelector('.c-header').getBoundingClientRect().height;
    let offsetTop;
    if (document.querySelector(sectionId)) {
      offsetTop = document.querySelector(sectionId).offsetTop - navHeight;
    } else {
      offsetTop = navHeight;
    }
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  /**
   * Anchor link smooth scroll
   * 1) If the current URL is the homepage, prevent the default behavior of the link
   * 2) On click of an anchor link, smooth scroll to the section
   * 3) Add hash value to URL
   */
  const anchorLinks = document.querySelectorAll('a[href^="/#"]');
  if (anchorLinks.length > 0) {
    anchorLinks.forEach((el) => {
      el.addEventListener('click', (event) => {
        /* 1 */
        var currentUrl = window.location.href + '/';
        var homeUrl = window.location.protocol + "//" + window.location.host;
        if (currentUrl == homeUrl) {
          event.preventDefault();
        }
        /* 2 */
        setSmoothScrollTo(el.hash);
        /* 3 */
        window.history.pushState(null, null, el.hash);
      });
    });
  }

  /**
   * Get hash value from url
   */
  function getHashValue(url) {
    const hashIndex = url.indexOf("#");
    if (hashIndex >= 0) {
      const queryIndex = url.indexOf("?", hashIndex);
      if (queryIndex >= 0) {
        return url.substring(hashIndex + 1, queryIndex);
      } else {
        return url.substring(hashIndex + 1);
      }
    } else {
      return "";
    }
  }

  /**
   * Set scroll to hash
   * 1) Remove the '#' symbol from the hash
   * 2) Find the element with the corresponding ID
   * 3) If the element exists, scroll to it
   */
  function setScrollToHash() {
    const hash = getHashValue(window.location.hash); /* 1 */
    const target = document.getElementById(hash); /* 2 */
    /* 3 */
    if (target) {
      target.scrollIntoView({ behavior: "smooth"});
    }
  }

  /**
   * On DOM content loaded
   * 1) If the url has ?_sft_category or ?sf_paged, then scroll to the gallery section, else scroll to the hash
   * 2) If the url has ?_sft_category or ?sf_paged, then set the is-filtered class
   */
  document.addEventListener('DOMContentLoaded', function() {
    /* 1 */
    if (window.location.href.indexOf('?_sft_category') !== -1 || window.location.href.indexOf('sf_paged') !== -1) {
      //setScrollToHash();
      document.getElementById('gallery-filter').scrollIntoView();
    } else if (window.location.hash) {
      setScrollToHash();
    }
    /* 2 */
    galleryFiltered()
  });

  /**
   * Remove active primary nav classes
   */
  function removeActivePrimaryNav() {
    document.body.classList.remove('primary-nav-is-active');
    document.querySelector('.c-primary-nav__menu-toggle').classList.remove('primary-nav-is-active');
  }

  /**
   * Primary nav link toggle
   * 1) Close the primary menu on click of each link
   * 2) Remove active nav classes if a user clicks outside of the .c-primary-nav__parent-list
   * 3) Remove active nav classes if a user scrolls
   */
  const primaryNavLinks = document.querySelectorAll('.js-primary-nav-link');
  if (primaryNavLinks.length > 0) {
    /* 1 */
    primaryNavLinks.forEach((el) => {
      el.addEventListener('click', () => {
        removeActivePrimaryNav();
      });
    });

    /* 2 */
    document.addEventListener('click', (event) => {
      if (document.querySelector('body').classList.contains('primary-nav-is-active')) {
        const isClickInside = document.querySelector('.c-primary-nav__parent-list').contains(event.target);
        if (!isClickInside) {
          removeActivePrimaryNav();
        }
      }
    });

    /* 3 */
    document.addEventListener('scroll', () => {
      if (document.querySelector('body').classList.contains('primary-nav-is-active')) {
        removeActivePrimaryNav();
      }
    });
  }

  /**
   * Block read more toggle
   * 1) On click of the more link in blocks, toggle the full and read more previews
   */
  const galleryFilter = document.querySelector('#gallery-filter');
  if (galleryFilter) {
    galleryFilter.addEventListener('click', (e) => {
      if (e.target.matches('.read-more')) {
        const target = e.target.parentElement.parentElement;
        e.preventDefault();
        target.querySelector('.js-block-body-more').classList.remove('this-is-active');
        target.querySelector('.js-block-body-full').classList.add('this-is-active');
      }
    });
  }

  // application code
  /**
   * toggleClasses()
   *
   * @description
   * toggle specific classes based on data-attr of clicked element
   *
   * @requires
   * 'js-toggle' class and a data-attr with the element to be
   * toggled's class name both applied to the clicked element
   *
   * @example
   * <span class="js-toggle" data-toggled="toggled-class">Toggler</span>
   * <div class="toggled-class">This element's class will be toggled</div>
   *
   * @param {Element} element - element to toggle.
   */
  function toggleClasses(element) {
    const togglePrefix = element.dataset.prefix || 'this';
    let toggled = null;

    // If the element you need toggled is relative to the toggle, add the
    // .js-this class to the parent element and "this" to the data-toggled attr.
    if (element.dataset.toggled == "this") {
      toggled = [...element.closest('.js-this')];
    }
    else {
      toggled = [...document.querySelectorAll(element.dataset.toggled)];
    }
    if (element.getAttribute('aria-expanded') == 'true') {
      element.setAttribute('aria-expanded', 'true');
    }
    else {
      element.setAttribute('aria-expanded', 'false');
    }
    element.classList.toggle(togglePrefix + '-is-active');

    if (toggled && toggled.length) {
      toggled.forEach((el) => {
        el.classList.toggle(togglePrefix + '-is-active');
      })
    }

    // Remove a class on another element, if needed.
    if (element.dataset.removeClass) {
      document.querySelector('.' + element.dataset.removeClass).classList.remove(element.dataset.removeClass);
    }
  }

  function setUtilities(parentEl) {
    // Toggle class
    [...parentEl.querySelectorAll('.js-toggle:not(.js-toggle--initialized)')].forEach((el) => {
      el.classList.add('js-toggle--initialized');
      el.addEventListener('click', (e) => {
        if (!el.classList.contains('js-not-stop')) {
          e.preventDefault();
          e.stopPropagation();
        }
        toggleClasses(el);
      });
    });

    // Toggle parent class
    [...parentEl.querySelectorAll('.js-toggle-parent:not(.js-toggle-parent--initialized)')].forEach((el) => {
      el.classList.add('js-toggle-parent--initialized');
      el.addEventListener('click', (e) => {
        if (!el.classList.contains('js-not-stop')) {
          e.preventDefault();
        }
        el.classList.toggle('this-is-active');
        el.parentElement.classList.toggle('this-is-active');
      });
    });
  }

  setUtilities(document);
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
