document.addEventListener('DOMContentLoaded', function () {
  var galleries = document.querySelectorAll('[data-gallery]');
  if (!galleries.length) return;

  galleries.forEach(function (gallery) {
    var items = gallery.querySelectorAll('.post-gallery__item');
    if (!items.length) return;

    var track = gallery.querySelector('.post-gallery__track');
    var current = 0;
    var prevBtn = gallery.querySelector('[data-gallery-prev]');
    var nextBtn = gallery.querySelector('[data-gallery-next]');
    var isPortfolio = gallery.classList.contains('post-gallery--portfolio');
    var transitionMs = 260;

    function recalcHeight() {
      if (isPortfolio) return;
      if (!track) return;
      var max = 0;
      items.forEach(function (item) {
        var img = item.querySelector('img');
        if (!img) return;
        var naturalWidth = img.naturalWidth;
        var naturalHeight = img.naturalHeight;
        if (!naturalWidth || !naturalHeight) return;
        var width = track.clientWidth || img.clientWidth || naturalWidth;
        var h = width * (naturalHeight / naturalWidth);
        if (h > max) max = h;
      });
      if (max > 0) {
        if (isPortfolio) {
          gallery.style.setProperty('--gallery-media-height', Math.round(max) + 'px');
        } else {
          track.style.minHeight = Math.round(max) + 'px';
        }
      }
    }

    function clearMotionClasses(item) {
      item.classList.remove(
        'post-gallery__item--enter-next',
        'post-gallery__item--enter-prev',
        'post-gallery__item--exit-next',
        'post-gallery__item--exit-prev'
      );
    }

    function update(nextIndex, animate) {
      var previousIndex = current;
      var direction = nextIndex > previousIndex ? 'next' : 'prev';
      var previousItem = items[previousIndex];
      var nextItem = items[nextIndex];

      items.forEach(function (item) {
        clearMotionClasses(item);
        item.classList.remove('post-gallery__item--active');
      });

      if (!animate || previousIndex === nextIndex) {
        if (nextItem) {
          nextItem.classList.add('post-gallery__item--active');
        }
      } else {
        if (previousItem) {
          previousItem.classList.add('post-gallery__item--active', 'post-gallery__item--exit-' + direction);
        }
        if (nextItem) {
          nextItem.classList.add('post-gallery__item--active', 'post-gallery__item--enter-' + direction);
          window.requestAnimationFrame(function () {
            nextItem.classList.remove('post-gallery__item--enter-' + direction);
          });
        }

        if (previousItem && previousItem !== nextItem) {
          window.setTimeout(function () {
            clearMotionClasses(previousItem);
            if (previousIndex !== current) {
              previousItem.classList.remove('post-gallery__item--active');
            }
          }, transitionMs);
        }
      }

      current = nextIndex;

      if (prevBtn) prevBtn.style.display = nextIndex === 0 ? 'none' : '';
      if (nextBtn) nextBtn.style.display = nextIndex === items.length - 1 ? 'none' : '';
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (current > 0) {
          update(current - 1, true);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (current < items.length - 1) {
          update(current + 1, true);
        }
      });
    }

    // Wait for images to load before calculating height
    var pending = items.length;
    items.forEach(function (item) {
      var img = item.querySelector('img');
      if (!img) {
        pending -= 1;
        return;
      }
      if (img.complete) {
        pending -= 1;
      } else {
        img.addEventListener('load', function () {
          pending -= 1;
          if (pending <= 0) {
            recalcHeight();
          }
        });
        img.addEventListener('error', function () {
          pending -= 1;
        });
      }
    });
    if (pending <= 0) {
      recalcHeight();
    }

    window.addEventListener('resize', function () {
      if (!isPortfolio) {
        recalcHeight();
      }
    });

    update(current, false);
  });
});

