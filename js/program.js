// mobile slide
function mSlide() {
    if (window.innerWidth <= 640) {
        let projectSwiper = new Swiper(".mSlide", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.mSlide .pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.mSlide .button-next',
                prevEl: '.mSlide .button-prev',
            },
        });
    }
}

let resizetime;

window.addEventListener("resize",()=>{
    clearTimeout(resizetime);
    resizetime = setTimeout(()=>{
        mSlide()
    },300);
})

//faq toggle
let faqList = document.querySelectorAll(".program03 > div .detail ul li");

function faqToggle() {
    faqList.forEach((li,index)=>{
        let faq = li.querySelector("a");        
        faq.addEventListener("click", ()=>{
            li.classList.toggle("on");
            for(let i=0; i<faqList.length; i++){
                if(i==index){
                    continue;
                };
                if(faqList[i].classList.contains("on")){
                    faqList[i].classList.remove("on");
                };
            };
        });
    })
}
faqToggle();

function recommendSilde() {
    let recommendSwiper = new Swiper(".recommendSlide", {
        breakpoints: {
    	320: {
      	slidesPerView: 3,
      	spaceBetween: 10
   		 },
    	640: {
     	 slidesPerView: 4,
     	 spaceBetween: 15
   		 }
  		},
        navigation: {
            nextEl: '.program05 .slideControl .button-next',
            prevEl: '.program05 .slideControl .button-prev',
        },
    });
}
recommendSilde()