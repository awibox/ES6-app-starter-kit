import _ from 'lodash';
import $ from 'jquery';
import template from './index.hbs';
import './content.css';
import './blocks/b-content/b-content';



$(function(){
    $('.b-content').append(template({name: 'Webpack'}));
});

console.log(_.isEqual(1,2));