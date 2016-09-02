import template from './module.hbs';
import './module.scss'

export default class Module {
    constructor(data) {
        $(function () {
            $(".page").append(template(data));
        });
    }
};