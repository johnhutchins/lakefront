$(function(){

    var logo = $("#logo"),
    logoSource = logo.attr("src");

    // logo.mouseenter(function(){    
    //    var whiteLogoSource = logo.attr("src", "./images/lakefrontLogoWhite.svg");    
    //    logoSource = whiteLogoSource;   
    // });

    // logo.mouseout(function(){
    //     logoSource = logo.attr("src", "./images/lakefrontLogo.svg");
    // });
    console.log("doc widf");

    console.log('document width ', $(document).width());

    if ($(document).width() <= 1544){
        logoSource = logo.attr("src", "./images/lakefrontLogo.svg");
    }
});