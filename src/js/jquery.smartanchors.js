/*
 * SmartAnchors
 * http://github.com/awibox/SmartAnchors
 *
 * Author: Andrey Arkhipov
 * http://awibox.ru
 *
 * Licensed under the MIT license.
 *
 * $('nav_id').smartanchors(speed);
 */
(function($) {
    jQuery.fn.smartanchors = function(speed, addFixed, pagePadding) {
        var me = this,
            scrollPage = function() {
                var navItems = $(me).find('a'),
                    windowHeight = $(window).height(),
                    offsetTop = 100+pagePadding,
                    windowTop = $(window).scrollTop();
                    $(me).removeClass("fixed");
                if(windowTop>addFixed) {
                    $(me).addClass("fixed");
                }
                console.log(windowTop);
                navItems.each(function(i){
                    var content = $($(this).attr("href"));
                    var page = content.offset().top - offsetTop;
                    if(navItems.length-2 == i) {
                        content.css('min-height', windowHeight/1.5);
                    }
                    if(navItems.length-1 == i) {
                        page = content.offset().top - offsetTop - windowHeight + content.height();
                        content.css('min-height', windowHeight/1.5)
                    }
                    if (windowTop > page) {
                        navItems.removeClass("active");
                        $(this).addClass("active");
                    }
                });
            };

        scrollPage();
        $(window).scroll(scrollPage);
        $(window).resize(scrollPage);
        $(this).find('a').click(function(ev){
            var hash = $(this).attr("href");
            $('html,body').animate({scrollTop: $(hash).offset().top-pagePadding},speed);
            return false;
        });
    };
})(jQuery);
