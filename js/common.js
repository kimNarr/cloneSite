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


// 메인비주얼 스크롤 이벤트
gsap.registerPlugin(ScrollTrigger);

let mainText = document.querySelector(".mainView .inner .textBox");

gsap.to(mainText, {
    scale: 0.3, 
    autoAlpha: 0, 
    ease: "power2",
    scrollTrigger: {
        trigger: mainText,
        scrub: true,
        start: "top top",
        end: "bottom -=100%",
        // markers : true,
    },
});


// 프로젝트 섹션 fade effect
let project = document.querySelector(".project");

gsap.to(project,{
    scrollTrigger: {
        trigger: mainText,
        scrub: true,
        start: "center 30%",
        end: "center 30%",
        // markers: true,
        onEnter: function() {
            project.classList.add("on")
        },
        onLeaveBack: function() {
            project.classList.remove("on")
        },
    },
});

// 파트너 섹션 fade effect
let partner = document.querySelector(".partner");

gsap.to(partner,{
    scrollTrigger: {
        trigger: project,
        scrub: true,
        start: "top top",
        end: "top top",
        // markers: true,
        onEnter: function() {
            partner.classList.add("on")
        },
        onLeaveBack: function() {
            partner.classList.remove("on")
        },
    },
});

// alumni 섹션 fade effect
let alumni = document.querySelector(".alumni");

gsap.to(alumni,{
    scrollTrigger: {
        trigger: project,
        scrub: true,
        start: "center top",
        end: "center top",
        // markers: true,
        onEnter: function() {
            alumni.classList.add("on")
        },
        onLeaveBack: function() {
            alumni.classList.remove("on")
        },
    },
});

// performance 섹션 fade effect
let performance = document.querySelector(".performance");

gsap.to(performance,{
    scrollTrigger: {
        trigger: alumni,
        scrub: true,
        start: "top top",
        end: "top top",
        // markers: true,
        onEnter: function() {
            performance.classList.add("on")
        },
        onLeaveBack: function() {
            performance.classList.remove("on")
        },
    },
});

// performance 섹션 number count up
let countUpTriggers = document.querySelectorAll(".numberBox ul li");

countUpTriggers.forEach(trigger => {
    let countUpTarget = trigger.querySelector(".num");

    let countElement = {
        from: countUpTarget.dataset.from,
        to: countUpTarget.dataset.to
    };

    let numberElement = {
        count: countElement.from
    };

    gsap.to(numberElement, {
        count: countElement.to,
        duration: 2,
        stagger: 1,
        scrollTrigger: {
            trigger: alumni,
            start: "top top",
            // markers: true,
            toggleActions: "play none none reset",
        },
        onUpdate: ()=>{
            if(countUpTarget.classList.contains("n01")) {
                countUpTarget.textContent = `${Math.floor(numberElement.count)}+`;
            } else if(countUpTarget.classList.contains("n04")) {
                countUpTarget.textContent = Math.floor(numberElement.count).toLocaleString();
            } else {
                countUpTarget.textContent = Math.floor(numberElement.count);
            }      
        }
    });
});

// newsletter 섹션 fade effect
let newsletter = document.querySelector(".newsletter");
let subscribeBtn = newsletter.querySelector(".inner .subscribe button")

gsap.to(newsletter,{
    scrollTrigger: {
        trigger: performance,
        scrub: true,
        start: "top top",
        end: "top top",
        // markers: true,
        onEnter: function() {
            newsletter.classList.add("on");
            subscribeBtn.classList.add("on");
        },
        onLeaveBack: function() {
            newsletter.classList.remove("on")
            subscribeBtn.classList.remove("on");
        },
    },
});

// footer family site
function familySite() {
    let familySite = document.querySelector("#family");

    window.open(familySite.value);
};