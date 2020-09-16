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
    hamburger.toggleClass('expanded');
    this.menuSection.toggleClass('expanded');
  }
};
export default Header;
