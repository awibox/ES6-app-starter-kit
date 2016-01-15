import './../less/build.less';
import data from './data.js';

import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Footer from './../modules/footer/footer';
import Menu from './../modules/menu/menu';
import News from './../modules/news/news';
import Promo from './../modules/promo/promo';

new Header(data.header);
new Content(data.content);
new Footer(data.footer);
new Menu(data.menu, '#header-wrap','.menu_black');
new Promo(data.promo, '#content-wrap');
new News(data.news, '#content-wrap');

