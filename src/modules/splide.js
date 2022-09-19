import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const elements = document.querySelectorAll('.splide')

elements.forEach(el => {
  new Splide(el, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoWidth: true,
    autoScroll: {
      speed: 0.5
    },
    pagination: false,
    arrows: false,
    // drag: false
  }).mount({AutoScroll})
})

