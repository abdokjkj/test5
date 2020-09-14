
$(function(){

$("body").niceScroll({

cursorcolor: "black",
cursorwidth: "5px"

});

new WOW().init();

$(".one button").on("click",function(){

$(this).css("backgroundColor","#7cb62f").siblings().css("backgroundColor","black");
$(this).css("outline","none");
$(this).css("border","none")

});

var mixer = mixitup('.cont');

$(window).on("scroll",function(){

var ex = $(this).scrollTop();

if(ex > 2260){

$('.timer').countTo();

}

});

$('.circlechart').circlechart();

$(".test1").on("mouseenter",function(){


$(".m1").css("backgroundColor","#7cb62f")
$(".x1").css("backgroundColor","#7cb62f")

});

$(".test1").on("mouseleave",function(){

$(".m1").css("backgroundColor","black")
$(".x1").css("backgroundColor","black")
    
});
    
$(".test2").on("mouseenter",function(){

$(".m2").css("backgroundColor","#7cb62f")
$(".x2").css("backgroundColor","#7cb62f")
    
});
    
$(".test2").on("mouseleave",function(){
    
$(".m2").css("backgroundColor","black")
$(".x2").css("backgroundColor","black")
        
});

$(".test3").on("mouseenter",function(){

$(".m3").css("backgroundColor","#7cb62f")
$(".x3").css("backgroundColor","#7cb62f")
    
});
    
$(".test3").on("mouseleave",function(){
    
$(".m3").css("backgroundColor","black")
$(".x3").css("backgroundColor","black")
        
});

$(".test4").on("mouseenter",function(){


$(".m4").css("backgroundColor","#7cb62f")
$(".x4").css("backgroundColor","#7cb62f")
    
});
    
$(".test4").on("mouseleave",function(){
    
$(".m4").css("backgroundColor","black")
$(".x4").css("backgroundColor","black")
        
});

$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:false,
responsive:{
0:{
items:1
},
600:{
items:3
},
1000:{
items:4
}
}
})

$(".cx span").on("click",function(){

$(this).css("backgroundColor","#7cb62f").siblings().css("backgroundColor","black")

})

$(".cx span:nth-of-type(2)").on("click",function(){

$(".cy1").hide(500);
$(".cy3").hide(500);
$(".cy2").slideDown(500);

})

$(".cx span:nth-of-type(3)").on("click",function(){

$(".cy1").hide(500);
$(".cy2").hide(500);
$(".cy3").slideDown(500);
    
})

$(".cx span:nth-of-type(1)").on("click",function(){

$(".cy2").hide(500);
$(".cy3").hide(500);
$(".cy1").slideDown(500);
    
})

$('.test-popup-link').magnificPopup({
    type: 'iframe'
})

$('.single').slick({

    arrows : false

});

$(window).on("scroll",function(){

if($(this).scrollTop()>300){

$(".fa-arrow-up").css("display","block")

}

})

$(".fa-arrow-up").on("click",function(){

$("body,html").animate({

scrollTop : 0

},2000)

})

});
