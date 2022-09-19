import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  autoWidth: true,
  autoScroll: {
    speed: 0.25
  },
  pagination: false,
  arrows: false,
  drag: false
});

splide.mount({AutoScroll});
