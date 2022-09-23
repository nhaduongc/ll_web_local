import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const sliders = document.querySelectorAll('.slider')

sliders.forEach(el => {
  new Splide(el, {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoWidth: true,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
    // drag: false
  }).mount()
})
