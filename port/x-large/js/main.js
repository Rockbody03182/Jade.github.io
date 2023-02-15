/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
$("#top_menu_l li").mouseover(function(){
    $(this).children(" ul.box").show();
    
});
$("#top_menu_l li ,#top_menu_l li").mouseout(function(){
    $(this).children(" ul.box").hide();
   
});

$(".menu").on("click", function(){
    $(this).children(".con").slideToggle(300);
    
    if($(".menu").hasClass("active")){
        $(this).removeClass("active");
       
    }else{
          $(this).addClass("active");
    }
})
$(".toggler").on("click", function(){
    $(".hamslide").slideDown(300);
})
$(".close").on("click", function(){
    $(".hamslide").slideUp(300);
})