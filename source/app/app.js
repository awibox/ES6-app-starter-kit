import './../less/build.less';
import data from './data.js';
import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Menu from './../modules/menu/menu';

new Header(data.header);
new Content(data.content);
new Menu(data.menu, '.header__links');

