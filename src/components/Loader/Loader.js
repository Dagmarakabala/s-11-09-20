import $ from 'jquery';

const Loader = {
  settings: {
    target: '.loader'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings);
      this.removeLoder();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target
    };
  },
  removeLoder() {
    this.$target.root.addClass('-displayNone');
  }
};
export default Loader;
