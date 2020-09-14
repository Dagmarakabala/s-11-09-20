import 'babel-polyfill';
import $ from 'jquery';
import 'slick-carousel';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import News from './components/News/News';

$(document).ready(() => {
  // PUT LOADERS HERE
  Banner.init();
  Header.init();
  News.init();
});
