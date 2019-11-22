$(document).ready(() => {

    //  Function to show sidebar
    function toggleSidebar(){
        let sidebarWidth = $("#sidebar").outerWidth();
        $("#sidebar").removeClass("notransition");
        $("#sidebar").css("transition", "margin-left 0.6s");

        // Use margin left to hide or show sidebar
        if($("#sidebar").css("margin-left") == "0px"){
            $("#sidebar").css("margin-left", -sidebarWidth);
        }else{
            $("#sidebar").css("margin-left", "0px");
        }
    }

    //  Ensures sidebar stays hidden when window is resized
    function keepSideBarDistance(){
        let sidebarWidth = $("#sidebar").outerWidth();
        $("#sidebar").addClass("notransition");
        $("#sidebar").css("margin-left", -sidebarWidth);
    }

    //  Checks to hide sidebar or not when screen gets too small
    function checkWindowWidth(){
        if($(window).innerWidth() > 992){
            $("#sidebarCollapse").css("display", "block")
            keepSideBarDistance();
            $(".toggle-sidebar").click(() => {
                toggleSidebar();
            })
            $("#sidebar-top").css("display", "none");
            $("#sidebar").css("display", "block");
        }else{
            $(".toggle-sidebar").off("click");
            $("#sidebarCollapse").css("display", "none");
            $("#sidebar-top").css("display", "block");
            $("#sidebar").css("display", "none");
        }
    }

    //  Check for Breakpoints
    $(window).resize(() => {
        checkWindowWidth();
    })
    toggleSidebar();
    checkWindowWidth();
    
    
    //  Makes the a tags in table of contents white (lazy to add one by one)
    $("nav a").addClass("text-white");


    var bodyHeight = $("#content").height();
    var sidebarHeight = $("#sidebar-content").height();

    // Make sidebar scroll with the user
    function scrollSidebar(){
        if($("#sidebarCollapse")){
            let scrollTop = $(window).scrollTop();
            
            if(scrollTop > (bodyHeight - sidebarHeight)) return;
            $("#sidebar-content").css("margin-top", scrollTop);
        }
        
      }
    
    $(document).scroll(() => {
        scrollSidebar();
    });
    scrollSidebar();
})