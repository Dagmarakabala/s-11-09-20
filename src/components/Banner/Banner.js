import $ from 'jquery';
import 'slick-carousel';

const Banner = {
  settings: {
    target: '.banner',
    bannerSlick: '.banner__slick'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings, this.afterInit.bind(this));
    }
  },
  catchDOM(settings, callback) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      bannerSlick: target.find(settings.bannerSlick)
    };
    if (this.$target.root && this.$target.root.length > 0) callback();
  },

  bindEvents() {
    this.$target.bannerSlick.on('init', () => {
      this.playVideo();
    });
    this.$target.bannerSlick.on('afterChange', () => {
      this.playVideo();
    });

    $.each(this.$target.bannerSlick.find('video'), (index, element) => {
      if (element.readyState === 4) {
        $(element)
          .closest('.videobox')
          .removeClass('-loading-video');
        this.refresh();
      } else {
        $(element).on('loadeddata', event => {
          $(event.currentTarget)
            .closest('.videobox')
            .removeClass('-loading-video');
          this.refresh();
        });
      }
    });
  },

  afterInit() {
    this.bindEvents();
    this.initSlick();
  },

  initSlick() {
    this.$target.bannerSlick.slick({
      adaptiveHeight: true,
      arrows: false,
      autoplay: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 0
    });
    this.initialized = true;
  },

  playVideo() {
    const video = this.$target.bannerSlick.find('.slick-current video');
    if (video.length > 0) {
      video.get(0).play();
    }
  },

  refresh() {
    if (this.initialized) this.$target.bannerSlick.slick('setPosition');
  }
};

export default Banner;
