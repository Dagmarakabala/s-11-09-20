import $ from 'jquery';
import 'slick-carousel';

const Banner = {
  settings: {
    target: '.banner',
    bannerSlick: '.banner__slick',
    iframe: 'iframe'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings, this.afterInit.bind(this));
      this.resizePlayer(this.$target.iframe);
    }
  },
  catchDOM(settings, callback) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      bannerSlick: target.find(settings.bannerSlick),
      iframe: target.find(settings.iframe)
    };
    if (this.$target.root && this.$target.root.length > 0) callback();
  },
  bindEvents() {
    this.$target.bannerSlick.on('init', () => {
      this.playVideo();
      this.playPauseVideo(this.$target.bannerSlick, 'play');
    });
    this.$target.bannerSlick.on('beforeChange', () => {
      this.playVideo();
      this.playPauseVideo(this.$target.bannerSlick, 'pause');
    });
    this.$target.bannerSlick.on('afterChange', () => {
      this.playVideo();
      this.playPauseVideo(this.$target.bannerSlick, 'play');
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
      rows: 0,
      infinite: true
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
  },
  playPauseVideo(slick, control) {
    const currentSlide = slick.find('.slick-current');
    const slideType = currentSlide.attr('class').split(' ')[1];
    const player = currentSlide.find('iframe').get(0);
    if (slideType === 'youtube') {
      switch (control) {
        case 'play':
          this.postMessageToPlayer(player, 'mute');
          this.postMessageToPlayer(player, 'playVideo');
          break;
        case 'pause':
          this.postMessageToPlayer(player, 'pauseVideo');
          break;
      }
    }
  },
  postMessageToPlayer(player, func) {
    if (player == null) return;
    player.contentWindow.postMessage(
      `{"event":"command","func":"${func}","args":""}`,
      '*'
    );
  },
  resizePlayer(iframes) {
    if (!iframes[0]) return;
    const win = $('.banner__slick');
    const width = win.width();
    let playerWidth;
    let height = win.height();
    let playerHeight;
    let ratio = 16 / 9;
    $(iframes).each(function() {
      const current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current
          .width(playerWidth)
          .height(height)
          .css({
            left: (width - playerWidth) / 2,
            top: 0
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current
          .width(width)
          .height(playerHeight)
          .css({
            left: 0,
            top: (height - playerHeight) / 2
          });
      }
    });
  }
};

export default Banner;
