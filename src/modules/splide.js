import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const sliders = document.querySelectorAll('.slider')
const appSliders = document.querySelectorAll('.app-slider')

sliders.forEach(el => {
  new Splide(el, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoWidth: true,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 4000,
    direction: el.getAttribute('data-reverse') ? 'rtl' : 'ltr'
    // drag: false
  }).mount()
})

appSliders.forEach(el => {
  new Splide(el, {
    gap: '74px',
    perPage: 4,
    pagination: false,
    arrows: false,
    breakpoints: {
      1299: {
        perPage: 3,
        width: 900,
      },
      1023: {
        perPage: 2,
        width: 600,
      },
      767: {
        type: 'drag',
        fixedWidth: 200,
        width: '100%',
        gap: '40px',
        focus: 'center',
        start: 1,
      },
    }
  }).mount()
})
