

window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
   // removing arrow function
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})
//sns 
const twitter = document.querySelector(".fa-twitter"),
     linked = document.querySelector(".fa-linkedin");
    twitter.addEventListener("click", function(){
        alert("준비중입니다.");
    });
    linked.addEventListener("click", function(){
        alert("준비중입니다.");
    });

//Portfolio Item Filter
const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;
      
      for(let i=0; i<totalFilterBtn; i++){
         //console.log(filterBtns[i]);
          filterBtns[i].addEventListener("click",function(){
             //console.log(this.innerHTML);
              filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
              
            const filterValue=this.getAttribute("data-filter");
            //console.log(filterValue)
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
          });
      }
//Portfolio Lightbox
    const lightbox=document.querySelector(".lightbox"),
          lightboxImg=lightbox.querySelector(".lightbox-img"),
          lightboxClose=lightbox.querySelector(".lightbox-close"),
          lightboxText=lightbox.querySelector(".caption-text"),
          lightboxCounter=lightbox.querySelector(".caption-counter"),
          lightboxPreview=lightbox.querySelector(".preview"),
          lightboxBigyo=lightbox.querySelector(".caption-text"),
          design = "Design";
    let itemIndex=0;
    for(let i=0; i<totalPortfolioItem; i++){
        //console.log(portfolioItems[i]);
        portfolioItems[i].addEventListener("click",function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
//            if(lightboxBigyo.indexOf("Design") != -1){
//                lightboxImg.addClass("design");
//            }else{
//                alert("아쉽지만");
//            }
        })
    }
    function nextItem(){
        if(itemIndex == totalPortfolioItem-1){
            itemIndex=0;
        }else{
            itemIndex++
        }
        changeItem();
    }
    function prevItem(){
        if(itemIndex == 0){
            itemIndex=totalPortfolioItem-1;
        }else{
            itemIndex--
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function changeItem(){
        imgSrc=portfolioItems[itemIndex].querySelector(".hide img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + "of" + totalPortfolioItem;
    }

    lightboxPreview.addEventListener("click", function(){
        if(itemIndex == 0){
            document.getElementById('previewGo').setAttribute('href','https://sharp-heisenberg-3a8df0.netlify.app/');
            
        }else if(itemIndex == 1){
            document.getElementById('previewGo').setAttribute('href','port/gwangdong/main.html');
            
        }else if(itemIndex == 2){
            document.getElementById('previewGo').setAttribute('href','images/portfolio/espoir-long.png');
            
        }else if(itemIndex == 3){
            document.getElementById('previewGo').setAttribute('href','images/portfolio/Dansoon-long.png');
            
            
        }else if(itemIndex == 4){
            document.getElementById('previewGo').setAttribute('href','images/portfolio/crossfitt-long.png');

            
        }else if(itemIndex == 5){
            document.getElementById('previewGo').setAttribute('href','port/rolex/index.html');

             
        }else if(itemIndex == 6){
            document.getElementById('previewGo').setAttribute('href','index.html');

            
        }else if(itemIndex == 7){
            document.getElementById('previewGo').setAttribute('href','port/x-large/01_INDEX.html');

        }else if(itemIndex == 8){
            document.getElementById('previewGo').setAttribute('href','port/oliveyong/index.html');
  
        }else if(itemIndex == 9){
            document.getElementById('previewGo').setAttribute('href','port/guess/02_guess.html');
            
            
        }else if(itemIndex == 10){
            document.getElementById('previewGo').setAttribute('href','port/versace/index.html');
        }else{
            alert("준비중입니다.");
            document.getElementById('previewGo').removeAttribute('href','port/versace/index.html');
        }
        // if(itemIndex == 0){
        //     document.getElementById('previewGo').setAttribute('href','images/portfolio/espoir-long.png');
            
        // }else if(itemIndex == 1){
        //     document.getElementById('previewGo').setAttribute('href','images/portfolio/Dansoon-long.png');
        // }else if(itemIndex == 2){
        //     document.getElementById('previewGo').setAttribute('href','images/portfolio/crossfitt-long.png');
        // }else if(itemIndex == 3){
        //     document.getElementById('previewGo').setAttribute('href','port/rolex/index.html');
            
        // }else if(itemIndex == 4){
        //     document.getElementById('previewGo').setAttribute('href','index.html');
            
        // }else if(itemIndex == 5){
        //     document.getElementById('previewGo').setAttribute('href','port/x-large/01_INDEX.html');
             
        // }else if(itemIndex == 6){
        //     document.getElementById('previewGo').setAttribute('href','port/oliveyong/index.html');
            
        // }else if(itemIndex == 7){
        //     document.getElementById('previewGo').setAttribute('href','port/guess/02_guess.html');
        // }else if(itemIndex == 8){
        //      document.getElementById('previewGo').setAttribute('href','port/versace/index.html');  
        // }else{
        //     document.getElementById('previewGo').removeAttribute('href','port/versace/index.html');
        //     alert("준비중입니다.");
        // }
    });
    
//close Lightbox
lightbox.addEventListener("click",function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
});

//Aside Navbar
    const nav=document.querySelector(".nav"),
          navList=nav.querySelectorAll("li"),
          totalNavList=navList.length,
          allSection=document.querySelectorAll(".section"),
          totalSection=allSection.length;

    for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            //remove back section Class
            removeBackSectionClass();
            
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
//                    add back section Class
                    addBackSectionClass(j)
                    
                   // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            
            this.classList.add("active");
            showSection(this);
            
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        })
    }

    function removeBackSectionClass(){
        for (let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
            }
    }
    function addBackSectionClass(num){
        allSection[num].classList.add("back-section");
    }
    function showSection(element){
        //remove class active from all section
        for (let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
              
       // console.log(target)
              document.querySelector("#"+target).classList.add("active")
    }
    
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
            
        }
       // console.log(element.getAttribute("href").split("#")[1])
    }
    

    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex=this.getAttribute("data-section-index");
        //console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
        
    })

    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)
      //  asideSectionTogglerBtn(); you can also call like this
    

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }
    emailjs.init("user_1DSJpPbKBd7BzvHVwJ6Sw");		
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    const sendEmailBtn = document.querySelector('.send-email');
    const mailName = document.getElementById('name');
    const mailPhone = document.getElementById('phone');
    const mailId = document.getElementById('email');
    const mailMessage = document.getElementById('message');
    sendEmailBtn.addEventListener("click", function(){    	 
    
        // console.log(mailName.value);
        // alert(mailName.value);
    var templateParams = {	
    //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: mailName.value,
            phone: mailPhone.value,
            email: mailId.value,
            message: mailMessage.value 
                    };
                
                
    emailjs.send('gasina85', 'template_476nj1f', templateParams)
    //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("메일 발송 완료!")
                
            }, function(error) {
                console.log('FAILED...', error);
            });
                
    });





