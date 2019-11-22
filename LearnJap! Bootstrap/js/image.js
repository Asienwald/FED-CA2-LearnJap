$(document).ready(() => {
    // Initialise the tooltip for the pictures
    $('[data-toggle="tooltip"]').tooltip(); 

    // Event listener when modal is shown
    $("#pic-modal").on("show.bs.modal", (event) => {
        let btn = $(event.relatedTarget);
        // Get the img src and description for the button pressed
        let imgSrc = btn.children("img").prop("src");
        let descrip = btn.data("descrip");

        // Place img descrip into figcaption in modal
        let figCaption = $("#modal-content figcaption");
        figCaption.html(descrip);

        // Change img src in modal to src
        let figImg = $("#modal-content figure img");
        figImg.prop("src", imgSrc)
    })

})