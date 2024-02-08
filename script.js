

$(document).ready(function() {
    $(".botao").click(function() {
        $(this).animate({
            width: "toggle",
            height: "toggle"
        }, 1000);
    });
});
