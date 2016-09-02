import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'default',
    template: require('./default.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class Default {
    constructor() {

    }
}