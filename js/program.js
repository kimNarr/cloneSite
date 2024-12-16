let process = document.querySelector(".program01 ");
let process01 = process.querySelector(".detail ul li:first-child");
let process02 = process.querySelector(".detail ul li:nth-child(2)");
let process03 = process.querySelector(".detail ul li:nth-child(3)");
let process04 = process.querySelector(".detail ul li:nth-child(4)");
let process05 = process.querySelector(".detail ul li:last-child");

let processTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: process,
        start: "+=100 center",
        end: "+=100 center",
        duration: 0.1,
    }
});

processTimeline.to(process01,{opacity: 1});
processTimeline.to(process02,{opacity: 1, delay: 0.02});
processTimeline.to(process03,{opacity: 1, delay: 0.02});
processTimeline.to(process04,{opacity: 1, delay: 0.02});
processTimeline.to(process05,{opacity: 1, delay: 0.02});

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