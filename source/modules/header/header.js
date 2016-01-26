import template from './header.hbs';
import './header.scss'

console.log('-- header module --');

export default class Content {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    }
};

