import $ from 'jquery';
import 'slick-carousel';

const MainSite = {
  settings: {
    target: '.mainSite',
    firstSlick: '.mainSite__slick',
    secondSlick: '.mainSite__secondSlick',
    newsItem: '.newsItem',
    offerItem: '.offerItem'
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length) {
      this.catchDOM(this.settings);
      this.removeDisplayNone();
      this.initSlick();
      this.addOfferItems();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      firstSlick: target.find(settings.firstSlick),
      secondSlick: target.find(settings.secondSlick),
      newsItem: target.find(settings.newsItem),
      offerItem: target.find(settings.offerItem)
    };
  },
  initSlick() {
    this.$target.firstSlick.slick({
      adaptiveHeight: true,
      arrows: true,
      autoplay: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 0,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
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
    this.$target.secondSlick.slick({
      adaptiveHeight: true,
      arrows: true,
      autoplay: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      rows: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  },
  removeDisplayNone() {
    this.$target.newsItem.removeClass('-displayNone');
  },
  addOfferItems() {
    const src = [
      './assets/images/OfferItem/img1.png',
      './assets/images/OfferItem/img2.png',
      './assets/images/OfferItem/img3.png',
      './assets/images/OfferItem/img4.png',
      './assets/images/OfferItem/img3.png',
      './assets/images/OfferItem/img4.png'
    ];
    const title = [
      'Strony internetowe',
      'Hosting',
      'Domeny internetowe',
      'Pozycjonowanie stron',
      'Domeny internetowe',
      'Pozycjonowanie stron'
    ];
    const text = [
      'Przy projektowaniu zachowujemy zasady użyteczności stron (strona dobrze odźwierciedla ofertę firmy, łatwo znaleźć informacje na stronie, dobra nawigacja, dobrze sprzedająca grafika). Wykonujemy dedykowaną grafikę zgodnie z wymaganiami Klienta z przekazaniem praw autorskich.',
      'Przy projektowaniu zachowujemy zasady użyteczności stron (strona dobrze odźwierciedla ofertę firmy, łatwo znaleźć informacje na stronie, dobra nawigacja, dobrze sprzedająca grafika). Wykonujemy dedykowaną grafikę zgodnie z wymaganiami Klienta z przekazaniem praw autorskich.',
      'Przy projektowaniu zachowujemy zasady użyteczności stron (strona dobrze odźwierciedla ofertę firmy, łatwo znaleźć informacje na stronie, dobra nawigacja, dobrze sprzedająca grafika). Wykonujemy dedykowaną grafikę zgodnie z wymaganiami Klienta z przekazaniem praw autorskich.',
      'Przy projektowaniu zachowujemy zasady użyteczności stron (strona dobrze odźwierciedla ofertę firmy, łatwo znaleźć informacje na stronie, dobra nawigacja, dobrze sprzedająca grafika). Wykonujemy dedykowaną grafikę zgodnie z wymaganiami Klienta z przekazaniem praw autorskich.'
    ];
    $.each(this.$target.offerItem, (index, element) => {
      $(element).find('.offerItem__img')[0].src = src[index];
      $(element)
        .find('.offerItem__title')
        .text(title[index]);
      $(element)
        .find('.offerItem__text')
        .text(text[index]);
    });
  }
};

export default MainSite;
