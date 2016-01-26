import './promo.scss';
import template from './promo.hbs';

console.log('-- promo module --');

export default class News {
  constructor(data, id, modificator) {
    if(modificator) data.modificator = modificator.replace(/\./g, '');
    $(function () {
      $((id)? id : 'body').append(template(data));
    });
  }
}

