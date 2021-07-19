//navigation hover states//

$(".navText1").mouseover(function(){
    $(".navText1").css("color", "rgb(221,147,0");
});
$(".navText1").mouseout(function(){
    $(".navText1").css("color", "black");
});

$(".navText2").mouseover(function(){
    $(".navText2").css("color", "rgb(221,147,0");
});
$(".navText2").mouseout(function(){
    $(".navText2").css("color", "black");
});

$(".navText3").mouseover(function(){
    $(".navText3").css("color", "rgb(221,147,0");
});
$(".navText3").mouseout(function(){
    $(".navText3").css("color", "black");
});

$(".navText4").mouseover(function(){
    $(".navText4").css("color", "rgb(221,147,0");
});
$(".navText4").mouseout(function(){
    $(".navText4").css("color", "black");
});

//animate UX Skills Section//
$(".01").mouseover(function(){
    $(".01").animate({width:"400px"});
});
$(".01").mouseout(function(){
    $(".01").animate({width:"450px"});
});

$(".02").mouseover(function(){
    $(".02").animate({width:"400px"});
});
$(".02").mouseout(function(){
    $(".02").animate({width:"450px"});
});

$(".03").mouseover(function(){
    $(".03").animate({width:"400px"});
});
$(".03").mouseout(function(){
    $(".03").animate({width:"450px"});
});

//animate Work Section//
$(".button01").mouseover(function(){
    $(".button01").css("background-color", "rgb(221,147,0");
});
$(".button01").mouseout(function(){
    $(".button01").css("background-color", "#385c6d");
});

$(".button02").mouseover(function(){
    $(".button02").css("background-color", "rgb(221,147,0");
});
$(".button02").mouseout(function(){
    $(".button02").css("background-color", "#385c6d");
});

$(".button03").mouseover(function(){
    $(".button03").css("background-color", "rgb(221,147,0");
});
$(".button03").mouseout(function(){
    $(".button03").css("background-color", "#385c6d");
});

$(".allButton").mouseover(function(){
    $(".allButton").css("background-color", "rgb(221,147,0");
});
$(".allButton").mouseout(function(){
    $(".allButton").css("background-color", "#385c6d");
});

$(".button04").mouseover(function(){
    $(".button04").css("background-color", "rgb(221,147,0");
});
$(".button04").mouseout(function(){
    $(".button04").css("background-color", "#385c6d");
});

//animate "Check Out My Work" button//
$("#animateView").click(function(){
    document.getElementById("parentWork").scrollIntoView({
        behavior: "smooth"
    })
});