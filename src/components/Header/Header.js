import $ from 'jquery';

const Header = {
  init() {
    this.catchDOM();
    this.bindEvents();
  },
  catchDOM() {
    this.headerSection = $('.header');
    this.menuSection = $('.menu');
  },
  bindEvents() {
    this.headerSection
      .find('.header__toggle')
      .on('click', this.toggleHeader.bind(this));
  },
  toggleHeader() {
    const hamburger = this.headerSection.find('.header__toggle');
    const form = this.menuSection.find('.contactForm');
    hamburger.toggleClass('expanded');
    this.menuSection.toggleClass('expanded');
    form.removeClass('-formactive');
  }
};
export default Header;
