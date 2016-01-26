import './../sass/build.scss';
import data from './data.js';

import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Footer from './../modules/footer/footer';
import Menu from './../modules/menu/menu';
import Tech from './../modules/tech/tech';
import Promo from './../modules/promo/promo';

new Header(data.header);
new Content(data.content);
new Footer(data.footer);
new Menu(data.menu, '#header-wrap','.menu_black');
new Promo(data.promo, '#content-wrap');
new Tech(data.tech, '#content-wrap');

$(function(){
    $('.header__login').click(function(){
        require.ensure([], function(require) {
            let Modal = require('./../modules/modal/modal');
            new Modal(data.modal.login, 'body', ".modal_login")
        }, 'modal');
        return false;
    });
    $('.btn_success').click(function() {
        require.ensure([], function (require) {
            let Modal = require('./../modules/modal/modal');
            new Modal(data.modal.test, 'body', ".modal_test")
        }, 'modal');
        return false;
    });
});