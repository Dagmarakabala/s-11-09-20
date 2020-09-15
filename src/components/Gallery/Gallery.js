import $ from 'jquery';
import 'slick-carousel';
import 'lightgallery';
import 'lg-thumbnail';
import 'lg-share';
import 'lg-zoom';
import 'lg-hash';
import 'lg-video';
import 'lg-fullscreen';
import 'lg-pager';

const Gallery = {
  settings: {
    target: '.gallery',
    slick: '.gallery__slick'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings);
      this.initGallery();
      this.initSlick();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      slick: target.find(settings.slick)
    };
  },
  initGallery() {
    this.$target.slick.lightGallery({
      getCaptionFromTitleOrAlt: false,
      thumbnail: true
    });
  },

  initSlick() {
    this.$target.slick.slick({
      adaptiveHeight: true,
      arrows: true,
      autoplay: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 610,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
};

export default Gallery;
