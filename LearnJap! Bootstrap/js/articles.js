$(document).ready(() => {
    // Show dropdown collapse card when hovered
    $(".card").hover(() => {
        $(".card:hover > .collapse").collapse("show");
    }, () => {
        $(".card > .collapse").collapse("hide");
    })
})