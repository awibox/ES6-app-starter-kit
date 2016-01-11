import $ from 'jquery';
import template from './index.hbs';
import './less/build.less';
import './blocks/b-content/b-content';



$(function(){
    $('.b-content').append(template({name: 'Webpack'}));
});