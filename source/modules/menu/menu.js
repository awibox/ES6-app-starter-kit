import './menu.less';
import template from './menu.hbs';

console.log('-- menu module --');

export default class Menu {
  constructor(data, id) {
    $(function () {
      $((id)? id : 'body').append(template(data));
    });
  }
}

