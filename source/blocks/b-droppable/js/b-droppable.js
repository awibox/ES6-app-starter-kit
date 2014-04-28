$(function() {
    $(".b-droppable__block-1").draggable();
    $(".b-droppable__place-1").droppable({
        accept: ".b-droppable__block-1",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-1").draggable({handle:"p"});
        }
    });
    $(".b-droppable__block-2").draggable();
    $(".b-droppable__place-2").droppable({
        accept: ".b-droppable__block-2",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-2").draggable({handle:"p"});
        }
    });
    $(".b-droppable__block-3").draggable();
    $(".b-droppable__place-3").droppable({
        accept: ".b-droppable__block-3",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-3").draggable({handle:"p"});
        }
    });
    $(".b-droppable__block-4").draggable();
    $(".b-droppable__place-4").droppable({
        accept: ".b-droppable__block-4",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-4").draggable({handle:"p"});
        }
    });
    $(".b-droppable__block-5").draggable();
    $(".b-droppable__place-5").droppable({
        accept: ".b-droppable__block-5",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-5").draggable({handle:"p"});
        }
    });
    $(".b-droppable__block-6").draggable();
    $(".b-droppable__place-6").droppable({
        accept: ".b-droppable__block-6",
        drop: function (event, ui) {
            $(this).addClass("b-droppable__place_active").find("p").html("");
            indication();
            $(".b-droppable__block-6").draggable({handle:"p"});
        }
    });
    var indicationCount = 0;
    var indication = function() {
        indicationCount = indicationCount + 1;
        var indicationLoad = 165/6 * indicationCount;
        $('.b-progress-bar__load-pct-count').html(indicationCount);
        $('.b-progress-bar__load').animate({width:indicationLoad}, 1000);
        if(indicationCount == 6) {
            $('.b-droppable__place').fadeOut(1000)
            $('.b-droppable__block').fadeOut(1000)
            $('.b-droppable__completed').fadeIn(1000);
        }

    }
});