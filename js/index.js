document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.home-carousel')

  if (!carousel) return

  var track = carousel.querySelector('.carousel-track')
  var slides = Array.from(carousel.querySelectorAll('.carousel-slide'))
  var previousButton = carousel.querySelector('.arrow-l')
  var nextButton = carousel.querySelector('.arrow-r')
  var dotsContainer = carousel.querySelector('.carousel-dots')

  if (!track || !slides.length || !previousButton || !nextButton || !dotsContainer) return

  var currentIndex = 0
  var timer = null
  var autoplayDelay = 5000
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  var dots = slides.map(function (_, index) {
    var item = document.createElement('li')
    var button = document.createElement('button')

    button.type = 'button'
    button.className = 'carousel-dot'
    button.setAttribute('aria-label', 'Show image ' + (index + 1) + ' of ' + slides.length)
    button.addEventListener('click', function () {
      showSlide(index)
      restartAutoplay()
    })

    item.appendChild(button)
    dotsContainer.appendChild(item)
    return button
  })

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length
    track.style.transform = 'translateX(-' + currentIndex * 100 + '%)'

    dots.forEach(function (dot, dotIndex) {
      dot.setAttribute('aria-current', dotIndex === currentIndex ? 'true' : 'false')
    })

    slides.forEach(function (slide, slideIndex) {
      slide.setAttribute('aria-hidden', slideIndex === currentIndex ? 'false' : 'true')
    })
  }

  function stopAutoplay() {
    if (timer) {
      window.clearInterval(timer)
      timer = null
    }
  }

  function startAutoplay() {
    if (reduceMotion || slides.length < 2 || timer) return
    timer = window.setInterval(function () {
      showSlide(currentIndex + 1)
    }, autoplayDelay)
  }

  function restartAutoplay() {
    stopAutoplay()
    startAutoplay()
  }

  previousButton.addEventListener('click', function () {
    showSlide(currentIndex - 1)
    restartAutoplay()
  })

  nextButton.addEventListener('click', function () {
    showSlide(currentIndex + 1)
    restartAutoplay()
  })

  carousel.addEventListener('mouseenter', stopAutoplay)
  carousel.addEventListener('mouseleave', startAutoplay)
  carousel.addEventListener('focusin', stopAutoplay)
  carousel.addEventListener('focusout', function (event) {
    if (!carousel.contains(event.relatedTarget)) startAutoplay()
  })

  carousel.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showSlide(currentIndex - 1)
      restartAutoplay()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      showSlide(currentIndex + 1)
      restartAutoplay()
    }
  })

  showSlide(0)
  startAutoplay()
})
