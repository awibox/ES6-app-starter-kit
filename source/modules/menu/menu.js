import './menu.less';
import template from './menu.hbs';

console.log('-- menu module --');

export default class Menu {
  constructor(data, id, modificator) {
    if(modificator) data.modificator = modificator.replace(/\./g, '');
    $(function () {
      $((id)? id : 'body').append(template(data));
      $(modificator).find('.menu__item').click(function(){
        $(modificator).find('.menu__item_active').removeClass('menu__item_active');
        $(this).addClass('menu__item_active');
      });
    });
  }
}

