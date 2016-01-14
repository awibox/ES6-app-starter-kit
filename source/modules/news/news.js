import './news.less';
import template from './news.hbs';

console.log('-- news module --');

export default class News {
  constructor(data, id, modificator) {
    if(modificator) data.modificator = modificator.replace(/\./g, '');
    $(function () {
      $((id)? id : 'body').append(template(data));
    });
  }
}

