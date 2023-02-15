$(document).ready(function(){
    
    //메뉴 자판클릭시 메뉴 위에서 아래로
    $('.all_menu').click(function(){
       $('#menu_wrap').stop().animate({'top':'0'},'normal'); 
    });
    
    $('.menu_close1').click(function(){
        $('#menu_wrap').stop().animate({'top':'-100%'},'normal'); 
    });// 성공
    
    // 돋보기 클릭시 서치 위에서 아래로
    $('.search_glass1').click(function(){ /*$('.photo').fadeTo('slow',0);*/
        $('#search_wrap').stop().animate({'top':'50px'},'fast'); 
    });
    
    $('.menu_close2').click(function(){
        $('#search_wrap').stop().animate({'top':'-100%'},'fast');
    }); //성공
    
    //footer
    $('.hide1 li, .hide2 li, .hide3 li, .hide4 li').hide();
    
    $('.end1').click(function(){
       $('.hide1 li').slideToggle(); 
   
    });
        $('.end2').click(function(){
       $('.hide2 li').slideToggle(); 
   
    });
    $('.end3').click(function(){
       $('.hide3 li').slideToggle(); 
   
    });
    $('.end4').click(function(){
       $('.hide4 li').slideToggle(); 
    });
    
    //clean 클릭 한번시 이미지 1 - 2 - 3 - 1 한바퀴  
    $('.clean').click(function(){
        $(this).delay(2000).animate({'margin-left':'-300px'},1000);
       
    }).click(function(){
        $(this).delay(2000).animate({'margin-left':'-600px'},1000);
        
        
    }).click(function(){
        $(this).delay(2000).animate({'margin-left':'0'},1000);
        return false;
    });
    
    
    //clean2 클릭시 이미지 1-2-1
//    function slideClean2 (){
//        $('.clean2').stop().delay(2000).animate({'margin-left':'-370px'},1000);
//        $('.clean2').stop().delay(2000).animate({'margin-left':'0'},1000);
//    }
    $('.clean2').click(function(){
        $('.clean2').stop().delay(2000).animate({'margin-left':'-370px'},1000);
        return false;
    }).click(function(){
        $('.clean2').stop().delay(2000).animate({'margin-left':'0'},1000);
        return false;
        });
});
//자동 반복 slick_img
function slide(){
    $('.slick_p').delay(3000).animate({'margin-left':'-100%'},1500); 
    $('.slick_p').delay(3000).animate({'margin-left':'0'},1500);  
    
}
setInterval('slide()',1000);