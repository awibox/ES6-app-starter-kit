import template from './start.hbs';
import './start.scss'

export default class Start {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    }
};
