import $ from 'jquery';

const News = {
  settings: {
    target: '.news',
    month: 'button.news__month',
    item: '.newsItem',
    year: '.news__year'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings);
      this.bindEvents();
      this.addBackgroundColor();
      this.howManyItems();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      month: target.find(settings.month),
      item: target.find(settings.item),
      year: target.find(settings.year)
    };
  },
  bindEvents() {
    this.$target.month.on('click', this.displayItems.bind(this));
    this.$target.year
      .find('.news__title')
      .on('click', this.displayMonth.bind(this));
  },
  displayItems(event) {
    const month = $(event.currentTarget);
    const allItems = this.$target.item;
    const container = month.parent();
    const items = container.find(this.$target.item);
    allItems.addClass('-displayNone');
    items.removeClass('-displayNone');
  },
  addBackgroundColor() {
    $.each(this.$target.item, (index, element) => {
      if (index % 2 == 0) {
        $(element).addClass('-secondItem');
      }
    });
  },
  howManyItems() {
    $.each(this.$target.month, (index, element) => {
      const container = $(element).parent();
      const items = container.find(this.$target.item);
      container.find('.news__itemLength').text(`(${items.length})`);
    });
  },
  displayMonth(event) {
    const title = $(event.currentTarget);
    const allContainer = this.$target.root.find('.news__container');
    allContainer.addClass('-displayNone');
    const year = title.parent();
    year.find('.news__container').removeClass('-displayNone');
  }
};
export default News;
