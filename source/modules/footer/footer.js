import template from './footer.hbs';
import './footer.scss'

console.log('-- footer module --');

export default class Footer {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    };
};

