import template from './content.hbs';
import './content.less'

console.log('-- content module --');

let data = {
    name: 'Articles',
    articles: [
        {
            title: 'Article',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid autem beatae blanditiis ' +
            'dignissimos, doloremque dolores, doloribus illum in incidunt libero nemo nostrum odio perferendis quidem ' +
            'recusandae repellat, sint soluta.'
        },
        {
            title: 'Article 2',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid autem beatae blanditiis ' +
            'dignissimos, doloremque dolores, doloribus illum in incidunt libero nemo nostrum odio perferendis quidem ' +
            'recusandae repellat, sint soluta.'
        },
        {
            title: 'Article 3',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid autem beatae blanditiis ' +
            'dignissimos, doloremque dolores, doloribus illum in incidunt libero nemo nostrum odio perferendis quidem ' +
            'recusandae repellat, sint soluta.'
        }
    ]

};
$(function(){
    $(".page").append(template(data));
});

