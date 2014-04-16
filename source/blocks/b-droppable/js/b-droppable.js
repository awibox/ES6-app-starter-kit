$(function () {
    $(".b-droppable__block-1").draggable();
    $(".b-droppable__place-1").droppable({
        accept: ".b-droppable__block-1",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    $(".b-droppable__block-2").draggable();
    $(".b-droppable__place-2").droppable({
        accept: ".b-droppable__block-2",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    $(".b-droppable__block-3").draggable();
    $(".b-droppable__place-3").droppable({
        accept: ".b-droppable__block-3",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    $(".b-droppable__block-4").draggable();
    $(".b-droppable__place-4").droppable({
        accept: ".b-droppable__block-4",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    $(".b-droppable__block-5").draggable();
    $(".b-droppable__place-5").droppable({
        accept: ".b-droppable__block-5",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
    $(".b-droppable__block-6").draggable();
    $(".b-droppable__place-6").droppable({
        accept: ".b-droppable__block-6",
        activeClass: "ui-state-default",
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
    });
});