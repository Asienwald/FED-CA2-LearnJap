//  This is my Javascript code for the interactable slideshow present in index.html

//  The x transform value of the slideshow container (controls which slide you go to)
var xValue = 0;

//  Move the slideshow
function moveSlideshow(dir){
    let slideshowContents = document.getElementById("slideshow-contents");

    switch(dir){
        case "left":
            xValue += 20;
            break;
        case "right":
            xValue -= 20;
            break;
    }
    //  If Slideshow is alrdy at the 2 ends
    if(xValue > 0) xValue = -80;
    else if(xValue <= -100) xValue = 0;

    slideshowContents.style.transform = `translateX(${xValue}%)`;
    //  Set indicators accordingly
    setIndicators();
}

//  Make slideshow auto slide every 5 seconds
function autoSlide(){
    moveSlideshow("right");
    setTimeout(autoSlide, 5000);
}
setTimeout(autoSlide, 5000);

//  Set indicators (if it's not coloured or coloured if it's at the slide show indicated)
function setIndicators() {
    let indicators = document.getElementsByClassName("slideshow-indicator");

    for(var i = 0; i < indicators.length; i ++){
        let indicator = indicators[i];

        let xValueOfInd = indicator.getAttribute("x-value");

        //  Change icon based on what slide you are at
        if(xValueOfInd == xValue){
            indicator.children[0].classList.add("fa-circle");
            indicator.children[0].classList.remove("fa-circle-o");
        }else{
            indicator.children[0].classList.add("fa-circle-o");
            indicator.children[0].classList.remove("fa-circle");
        }
    }
}

setIndicators();    //  Set slide indicators on page refresh or load

//  The indicators will have this onclick function
//  Goes to slide pressed based on the x-value on indicator pressed
function goToSlide(indiXValue){
    xValue = indiXValue;

    let slideshowContents = document.getElementById("slideshow-contents");
    slideshowContents.style.transform = `translateX(${xValue}%)`;
    setIndicators();
}

//  Set the click listener on all the indicators passing their x values inside
let allIndi = document.getElementsByClassName("slideshow-indicator");
for(var i = 0; i < allIndi.length; i ++){
    let xVal = allIndi[i].getAttribute("x-value");
    allIndi[i].addEventListener("click", () => {goToSlide(xVal)});
}

//  Set click event listener to slideshow controls
document.getElementById("slideshow-left").addEventListener("click", () => {moveSlideshow("left")});
document.getElementById("slideshow-right").addEventListener("click", () => {moveSlideshow("right")});