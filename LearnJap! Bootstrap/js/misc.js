$(document).ready(() => {
  // Let header stick at top when scrolled past it
  function checkScroll(){
    var $header = $("header"), $nav = $(".navbar");
    $nav.toggleClass('fixed-top', $(this).scrollTop() > $header.height() - $nav.height());
  }

  $(document).scroll(() => {
    checkScroll();
  });
  checkScroll();

  // Stop signin dropdown from closing itself on one click inside
  $('.sign-dropdown').on('click', function(event){

    if ($("#open-signup").data('clicked') == false) {
      event.stopPropagation();
    }
    $("#open-signup").click(() => {
      $("#open-signup").data('clicked', true);
    })
  })
  
    //  Set background image
  function setImage(bg){
    let mainBody = $("#content-body");
    mainBody.css("background-image", `url(images/background/${bg}.jpg)`)
  }

  //  Set a background image for different pages with contents
  function setBackgroundImage(){

      // Randomise the background image
      let random = Math.floor(Math.random() * Math.floor(5)) + 1;
      setImage(`bg${random}`);
  }

  setBackgroundImage();
})