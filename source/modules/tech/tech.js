import './tech.less';
import template from './tech.hbs';

console.log('-- tech module --');

export default class News {
  constructor(data, id, modificator) {
    if(modificator) data.modificator = modificator.replace(/\./g, '');
    $(function () {
      $((id)? id : 'body').append(template(data));
    });
  }
}

