$(document).ready(function(){
    $('.header-top').mouseover(function(){
      $('.gnb-bar').stop().slideDown(500) 
    })
        $('.gnb-bar').mouseout(function(){
      $('.gnb-bar').stop().slideUp(500) 
    })
    /*swiper*/
    var swiper = new Swiper('.main-swiper', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    /*slider2*/
		var swiper2 = new Swiper('.product-swiper', {
			slidesPerView: 1,
			spaceBetween: 10,
		/*	loop: true,
            autoplay: true,*/
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
        
    /*popup*/
    $('.popup').click(function(){
        $('.popup-off').stop().fadeIn(300);
        return false
    })
    /*popup 창닫기 return false 중요!*/
     $(document).click(function(e){ //문서 body를 클릭했을때
 		if(e.target.className ==".popup"){return false}
 		$(".popup-off").stop().fadeOut(300);
 });
    
    
 window.onload=function(){
     $('.popup').toggleClass('on');
       if($('.popup').hasClass('on')){
          $(this).addClass('on')
        } else{
            $(this).removeClass('on');
        }
 }
    
    
    /*slider3*/
       var swiper3 = new Swiper('.reco-slider', {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    /*indicator*/
    $('.indicator > ul > li > a').click(function(e) {
    var href = $(this).attr('href');
    var targetTop = $(href).offset().top;
    $('html').stop().animate({scrollTop:targetTop}, 400);
    e.preventDefault();
    
    /*click*/
    $('.indicator > ul > li').find('a').removeClass('on')
    $(this).addClass('on')
    $('.indicator > ul > li > a .bg').removeClass('on')
    $(this).find('.bg').addClass('on');
    });
    /*go-top*/
    $(window).scroll(function(){
        var ScrollTop = $(window).scrollTop();
        
        if( ScrollTop >= 100){
        $('.go-top').fadeIn(300) 
    }else {
        $('.go-top').fadeOut() 
    }
    $('go-top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500)
        
        
    })    
    })
  
/*follow*/
 
  
//follow quick menu
$(window).scroll(function(){
var scrollTop = $(document).scrollTop();
if (scrollTop < 100) {
 scrollTop = 100;
   
}
$(".indicator").stop();
$(".indicator").animate( { "top" : scrollTop });
});
      
$(window).scroll(function(){
var scrollTop = $(document).scrollTop();
if (scrollTop < 150) {
 scrollTop = 150;
}
$('.go-top').stop();
$('.go-top').animate( { "top" : scrollTop });
});
    
/*tabmenu*/
    
$('dt').click(function(){
    $('dd').stop().hide();
    $(this).next().stop().show();
    $('dt').addClass('on')
    $(this).siblings().removeClass('on')
})
    
/*sub-menu*/
$('.list1').mouseover(function(){
    $('.list2').animate({opacity: '1'},1000)
    $('.list3').animate({opacity: '1'},2500)
    
})
/*sub-detail*/
    $('.list1').click(function(){
        $('.sub-detail').css('display','block')
        $('.list1').toggleClass('on')
        if($('.list1').hasClass('on')){
          $(this).css()
        } else{
            $(this).css('opcity','1');
            $('.sub-detail').css('display','none')
        }
    })
})












