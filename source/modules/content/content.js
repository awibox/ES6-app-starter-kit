import template from './content.hbs';
import './content.less'

console.log('-- content module --');
export default class Content {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    };
};

