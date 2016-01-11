import $ from 'jquery';
import template from './header.hbs';
import './header.less'

console.log('-- header module --');

let data = {
    name: 'Bem-builder',
    links: [
        {
            name: 'Главная страница',
            href: '#home'
        },
        {
            name: 'О компании'
        },
        {
            name: 'Контакты',
            href: '#contact'
        }
    ]
};
$(function(){
    $(".page").append(template(data));
});

