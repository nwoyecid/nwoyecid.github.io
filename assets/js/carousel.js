// Lightweight image carousel for publication pages
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.pub-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.pub-carousel-track');
    var slides = carousel.querySelectorAll('.pub-carousel-slide');
    var prev = carousel.querySelector('.pub-carousel-prev');
    var next = carousel.querySelector('.pub-carousel-next');
    var dots = carousel.querySelector('.pub-carousel-dots');
    var idx = 0;
    var count = slides.length;
    if (count === 0) return;

    // Build dots
    for (var i = 0; i < count; i++) {
      var dot = document.createElement('span');
      dot.className = 'pub-carousel-dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dot.addEventListener('click', function () { goTo(+this.dataset.index); });
      dots.appendChild(dot);
    }

    function goTo(n) {
      idx = ((n % count) + count) % count;
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      var allDots = dots.querySelectorAll('.pub-carousel-dot');
      for (var j = 0; j < allDots.length; j++) {
        allDots[j].className = 'pub-carousel-dot' + (j === idx ? ' active' : '');
      }
    }

    prev.addEventListener('click', function () { goTo(idx - 1); });
    next.addEventListener('click', function () { goTo(idx + 1); });

    // Auto-advance every 4s
    var timer = setInterval(function () { goTo(idx + 1); }, 4000);
    carousel.addEventListener('mouseenter', function () { clearInterval(timer); });
    carousel.addEventListener('mouseleave', function () {
      timer = setInterval(function () { goTo(idx + 1); }, 4000);
    });

    // Swipe support
    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goTo(idx - 1);
      else if (dx < -40) goTo(idx + 1);
    });
  });
});
