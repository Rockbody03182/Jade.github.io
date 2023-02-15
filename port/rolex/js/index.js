

const head = document.querySelector("#header"),
        image = document.querySelector(".logo a img"),
        nav = document.getElementsByClassName("head"),
        width = document.querySelector(".collection-part");
    
function scrollMouse(){
    if(window.pageYOffset == 0 && nav[0].offsetTop == 0) {
        head.addEventListener('mouseover',function(e){
            head.classList.add('on');
            image.src="images/rolex-logo01.png";
       });
    
        head.addEventListener('mouseout',function(e){
            head.classList.remove('on');
            image.src="images/rolex-logo02.png";
            
        });
        
    }else{
        head.addEventListener('mouseover',function(e){
            head.classList.add('on');
            image.src="images/rolex-logo01.png";
       });
       head.addEventListener('mouseout',function(e){
        head.classList.remove('on');
        image.src="images/rolex-logo01.png";
        
    });
    }
}
    
    window.onscroll = function sticky(){
        scrollMouse();
        if(window.pageYOffset > nav[0].offsetTop){
            nav[0].classList.add("nav-on");
            image.src="images/rolex-logo01.png";
        }else{
            nav[0].classList.remove("nav-on");
            image.src="images/rolex-logo02.png";
        }
    }

$(document).ready(function(){
    $("#rotate").on("click",function(){
        $(".fa-chevron-down").toggleClass("rotate");
        if($(".fa-chevron-down").hasClass("rotate")){
            $(".accessibility").slideDown();
            $('.accessibility').css('display', 'flex');

        }else{
            $(".accessibility").slideUp();
        }
    });
    // footer 
    $(".up-scroll").on("click",function(){
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    //footer upscroll
    
    $(".hamberger").on("click",function(){
        $(".menu-wrap").fadeIn();
        $(".menu").animate({left:"0"});
        $("html, body").addClass("scroll-no");
    })
    $(".close , .menu-bg").on("click",function(){
        $(".menu-wrap").fadeOut();
        $(".menu").animate({left:"-50%"});
        $("html, body").removeClass("scroll-no");
    })
    //hamberger menu
    $("#search").on("click",function(){
        $(".search-wrap").fadeIn();
        $(".search").animate({top:"0"});
        $("html, body").addClass("scroll-no");
    })
    $(".close , .bg").on("click",function(){
        $(".search-wrap").fadeOut();
        $(".search").animate({top:"-50%"});
        $("html, body").removeClass("scroll-no");
    })
    //search
})

