var $ = require("jquery");
window.jQuery = $;
window.$ = $;


console.log('Hello Andrey!');
require('./blocks/b-content/b-content')
$(function(){
    $(".b-page").html('test');
});
