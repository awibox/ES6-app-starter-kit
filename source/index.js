import _ from 'lodash';
import $ from 'jquery';
import './content.css';
import './blocks/b-content/b-content';

$(function(){
    $('.b-wrapper').css('background', 'red');
});
var obj = {
    field: 111,
    someFn () {
        console.log('someFn')
    }
}

obj.someFn();

console.log(_.isEqual(1,2));