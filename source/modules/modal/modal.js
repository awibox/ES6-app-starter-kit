import './modal.less';
import template from './modal.hbs';

console.log('-- modal module --');

export default class Modal {
  constructor(data, id, modificator) {
    if(modificator) data.modificator = modificator.replace(/\./g, '');
    $(function () {
      if($('.modal').is(modificator)) {
        $(modificator).show();
      } else {
        $((id)? id : 'body').append(template(data));
        $(modificator).find('.modal__close').click(function(){
          $(modificator).hide();
        });
      }
    });
  }
}

