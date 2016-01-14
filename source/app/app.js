import './../less/build.less';
import data from './data.js';
import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Menu from './../modules/menu/menu';
import News from './../modules/news/news';

new Header(data.header);
new Content(data.content);
new Menu(data.menu, '#header-wrap','.menu_black');
new News(data.news, '#content-wrap');

