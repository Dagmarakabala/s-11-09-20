import 'babel-polyfill';
import $ from 'jquery';
import 'slick-carousel';

import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import News from './components/News/News';
import MainSite from './components/MainSite/MainSite';
import Gallery from './components/Gallery/Gallery';
import Loader from './components/Loader/Loader';

$(document).ready(() => {
  // PUT LOADERS HERE
  Banner.init();
  Header.init();
  News.init();
  MainSite.init();
  Gallery.init();
  Loader.init();
});
