import template from './header.hbs';
import './header.less'

console.log('-- header module --');

export default class Content {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    }
};

