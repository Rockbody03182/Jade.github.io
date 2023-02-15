//슬라이더
$('.slider').slick({
    draggable:true,
    arrows:true,
    dots:true,
    infinite: false,
    centerMode:true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    centerPadding:'85px',
    initialSlide: 1,
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

    if (currentSlide !== nextSlide) {
        $('.slick-center + .slick-cloned').each(function(index, node) {
            var $node = $(node);

            setTimeout(function() {
                $node.addClass('slick-current');
                $node.addClass('slick-center');
            });
        });
    }
});

$(".contact_btn").click(function(event){            

    event.preventDefault();
    
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    
    });


$("document").ready(function() {
    var i = 0;
    $(".next").on("click", function(){
        if($(this).hasClass("slick-disabled")){
            $(this).addClass("opacity0");
        }else{
            $(".prev").removeClass("opacity0");
        }
    });

    $(".prev").on("click", function(){
        if($(this).hasClass("slick-disabled")){
            $(this).addClass("opacity0");
        }else{
            $(".next").removeClass("opacity0");
        }
    });

    setTimeout(function(){ $(".banner_popup").hide() }, 1000);

     $(window).scroll(function() {  
         var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다. 
         console.log(position);
    });        
   
});  



