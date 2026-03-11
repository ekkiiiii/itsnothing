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

    function recalcHeight() {
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
        track.style.minHeight = Math.round(max) + 'px';
      }
    }

    function update(activeIndex) {
      items.forEach(function (item, idx) {
        if (idx === activeIndex) {
          item.classList.add('post-gallery__item--active');
        } else {
          item.classList.remove('post-gallery__item--active');
        }
      });

      if (prevBtn) prevBtn.style.display = activeIndex === 0 ? 'none' : '';
      if (nextBtn) nextBtn.style.display = activeIndex === items.length - 1 ? 'none' : '';
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (current > 0) {
          current -= 1;
          update(current);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (current < items.length - 1) {
          current += 1;
          update(current);
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
      recalcHeight();
    });

    update(current);
  });
});

