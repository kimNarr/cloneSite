// about mission img fade effect
let mission = document.querySelector(".about01");
let missionImg = mission.querySelector(".detail .detailImg");

gsap.to(missionImg,{
    scrollTrigger: {
        trigger: mission,
        start: "top +=100",
        end: "top +=100",
        // markers: true,
        onEnter: function() {
            missionImg.classList.add("on");
        }
    }
});

// about ESG img & text fade effect
let esg = document.querySelector(".about02");
let esgImg01 = esg.querySelector(".detail .img .img01");
let esgImg02 = esg.querySelector(".detail .img .img02");
let esgImg03 = esg.querySelector(".detail .img .img03");
let esgText = esg.querySelector(".detail .text");

let esgTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: esg,
        start: "top top",
        end: "top top",
        duration: 1,
        // markers: true,
    }
});

esgTimeline.to(esgImg03,{opacity: 1});
esgTimeline.to(esgImg02,{opacity: 1, delay: 0.5});
esgTimeline.to(esgImg01,{opacity: 1});
esgTimeline.to(esgText,{opacity: 1, delay: 0.5});