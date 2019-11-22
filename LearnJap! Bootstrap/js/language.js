

$(document).ready(() => {

    // Check for width size
    function checkWidth(){

        if($(window).innerWidth() < 992){
            //  Have the lang containers span full width & remove hover functionality
            $("#lang-container > div").addClass("col-12");
            $("#lang-container .div-lang > div").removeClass("lang-descrip");
            $("#lang-container").css("height", "auto");
        }else{
            //  Have lang containers in 5 columns and add hover functionality
            $("#lang-container > div").removeClass("col-12");
            $("#lang-container .div-lang > div").addClass("lang-descrip");
            $("#lang-container").css("height", "80vh");
        }
    }
    checkWidth();
    
    $(window).resize(() => {
        checkWidth();
    })

})