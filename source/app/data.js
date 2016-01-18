var data = {
  header: {
    name: "Bem builder",
    login: "Авторизация"
  },
  menu: {
    items: [{
      text: "Webpack",
      href: "#webpack"
    }, {
      text: "Babel",
      href: "#babel"
    }, {
      text: "LESS",
      href: "#less"
    }]
  },
  modal: {
    login: {
      title: 'Авторизация',
      label: {
        email: 'Адрес e-mail',
        pass: 'Пароль'
      }
    },
    test: {
      title: "Заголовок",
      body: "Текст"
    }
  },
  tech: {
    title: "Технологии",
    items:  [{
        imgClass: "news__img_webpack",
        name: "WebpackJS",
        text: "Webpack – один из самых мощных и гибких инструментов для сборки frontend. " +
        "Вместе с тем, он достаточно сложен, а документация оставляет желать много лучшего.",
        url: "#news1"
      },
      {
        imgClass: "news__img_babel",
        name: "Babel.JS",
        text: "Стандарт ES-2015 был принят в июне 2015. Пока что большинство браузеров реализуют его частично. " +
        "Babel.JS – это транспайлер, переписывающий код на ES-2015 в код на предыдущем стандарте ES5.",
      },
      {
        imgClass: "news__img_less",
        name: "LessCSS",
        text: "LESS — это продукт с открытым исходным кодом. " +
        "Less — это вложенный метаязык: валидный CSS будет валидной less-программой с аналогичной семантикой.",
        url: "#news3"

      }]
  },
  promo: {
    name: "Bem-builder",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor " +
    "mauris condimentum nibh, ut fermentum massa justo sit amet.",
    link: "Попробывать",
    href: "#"
  },
  footer: {
    copyright: 'Bem-builder'
  }
};
module.exports = data;