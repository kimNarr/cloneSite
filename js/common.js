// 헤더 마우스 오버 이벤트
let header = document.querySelector("header");
let hInner = document.querySelector("header .inner")
let gnb = document.querySelectorAll(".gnb > li");
let navBg = document.querySelector(".navBg");

function headerOver () {
    gnb.forEach((li,idx)=>{
        let snb = li.querySelector(".snb");
        li.addEventListener("mouseenter", ()=>{
            header.classList.add("on");
            if(idx !== 2 && idx !== 3) {
                hInner.classList.add("on");
                snb.classList.add("on");
            };
        });
        li.addEventListener("mouseleave", ()=>{
            header.classList.remove("on");
            hInner.classList.remove("on");
            if(idx !== 2 && idx !==3) {
                snb.classList.remove("on");
            };
        });
    });    
};
headerOver();

// 모바일 햄버거 메뉴 클릭 이벤트
let logo = document.querySelector(".logo");
let hamBtn = document.querySelector(".hamBtn");
let mnb = document.querySelector(".mnb");
let mRnb = document.querySelector(".mRnb");

function navTrigger () {
    hamBtn.addEventListener("click", ()=>{
        hamBtn.classList.toggle("on");
        if(hamBtn.classList.contains("on")) {
            mnb.classList.add("on");
            mRnb.classList.add("on");
        } else {
            mnb.classList.remove("on");
            mRnb.classList.remove("on");
        };
    });
}
navTrigger();

// 모바일 메뉴 토글 이벤트
let mGnb = document.querySelectorAll("header .inner .mnb .mGnb > li");

function mNavTrigger () {
    mGnb.forEach((li,index)=>{        
        li.addEventListener("click", ()=>{
            li.classList.toggle("on");
            for(let i=0;i<mGnb.length;i++){
                if(i==index){
                    continue;
                };
                if(mGnb[i].classList.contains("on")){
                    mGnb[i].classList.remove("on");
                };
            };
        });
    })
}
mNavTrigger();


// footer family site
function familySite() {
    let familySite = document.querySelector("#family");

    window.open(familySite.value);
};

// top btn
let topBtn = document.querySelector(".topBtn");
let bodyArea = document.querySelector("body");

gsap.to(topBtn,{
    scrollTrigger: {
        trigger: bodyArea,
        start: "+=150 top",
        onEnter: function() {
            topBtn.classList.add("on");
        },
        onLeaveBack: function() {
            topBtn.classList.remove("on");
        }
    }
});

topBtn.addEventListener("click", ()=> {
    window.scrollTo({top:0, behavior:"smooth"})
});