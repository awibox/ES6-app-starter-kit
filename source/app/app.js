let data = {
    header: {
        name: 'Bem builder'
    },
    content: {
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

    },
    menu: {
        items: [{
            text: 'Яйца',
            href: '#eggs'
        }, {
            text: 'Мясо',
            href: '#meat'
        }, {
            text: '99% еды - бамбук!',
            href: '#bamboo'
        }]
    }
};

import './../less/build.less';
import Header from './../modules/header/header';
import Content from './../modules/content/content';
import Menu from './../modules/menu/menu';

new Header(data.header);
new Content(data.content);
new Menu(data.menu, '.header__links');

