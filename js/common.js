// header 생성
let header = document.querySelector("header");

let headerHtml = `
<div class="inner">
                <h1 class="logo"><a href="index.html"><img src="./img/logo.png" alt="logo"></a></h1>
                <ul class="gnb">
                    <li>
                        <a href="about.html">About</a>
                        <ul class="snb">
                            <li><a href="about.html">True Innovation team story</a></li>
                            <li><a href="#">True Innovation Lab 오시는 길</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="program.html">Program</a>
                        <ul class="snb">
                            <li><a href="program.html">True Innovation Accelerator</a></li>
                            <li><a href="#">Impactups</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="alumni.html">Alumni</a>
                    </li>
                    <li>
                        <a href="#">Partner</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                        <ul class="snb">
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">뉴스레터</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="rnb">
                   <li class="contact"><a href="#">제안하기</a></li>
                   <li><a href="#">JOIN</a></li>
                   <li><a href="#">LOGIN</a></li>
                   <li><a href="#"><img src="./img/ico_facebook.png" alt="facebook"></a></li>
                </ul>
                <div class="navBg"></div>
                <div class="mRnb">
                    <div class="contact"><a href="#">제안하기</a></div>
                    <ul class="member">
                        <li><a href="#">JOIN</a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#"><img src="./img/ico_facebook.png" alt="facebook"></a></li>
                    </ul>
                    <div class="hamBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="mnb">
                    <ul class="mGnb">
                        <li>
                            <a href="#">About</a>
                            <ul class="mSnb">
                                <li><a href="about.html">True Innovation team story</a></li>
                                <li><a href="#">True Innovation Lab 오시는 길</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Program</a>
                            <ul class="mSnb">
                                <li><a href="program.html">True Innovation Accelerator</a></li>
                                <li><a href="#">Impactups</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="alumni.html">Alumni</a>
                        </li>
                        <li>
                            <a href="#">Partner</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                            <ul class="mSnb">
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">뉴스레터</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
`;
header.innerHTML = headerHtml;

// footer 생성
let footer = document.querySelector("footer");
footerHtml = `
            <div class="inner">
                <div class="left">
                    <div class="logo">
                        <a href="#"><img src="./img/logo_footer.png" alt="로고이미지"></a>
                    </div>
                    <p class="text">협력의 가치로<br>미래를 그리는<br class="mBr">SK True Innovation입니다</p>
                </div>
                <div class="right">
                    <div class="fnb">
                        <ul>
                            <li><a href="#"><strong>개인정보처리방침</strong></a></li>
                            <li><a href="#">이메일주소무단수집거부</a></li>
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">뉴스레터 구독신청/해지</a></li>
                        </ul>
                        <div class="family">
                            <div class="inner">
                                <select name="family" id="family" onchange="familySite()">
                                    <option value="" hidden>Family Site</option>
                                    <option value="http://www.sktelecom.co.kr/">SK telecom</option>
                                    <option value="https://ccei.creativekorea.or.kr/daejeon">대전 창조경제혁신센터</option>
                                    <option value="https://ccei.creativekorea.or.kr/seoul">서울 창조경제혁신센터</option>
                                    <option value="https://lora.sktiot.com/main/index.do">IoT Portal</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        <ul>
                            <li>
                                <strong>Address</strong>
                                <span>서울특별시 중구 을지로66</span>
                                <strong>대표이사·사장</strong>
                                <span>유영상</span>
                                <strong>Tel</strong>
                                <span>02-6250-8124</span>
                            </li>
                            <li>
                                <strong>Fax</strong>
                                <span>02-6250-8126</span>
                                <strong>사업자등록번호</strong>
                                <span>104-81-37225</span>
                                <strong>판매허가번호</strong>
                                <span>중구 02923호</span>
                            </li>
                        </ul>
                    </div>
                    <p class="copyright">Copyright True innovation. All rights reserved.</p>
                </div>
            </div>
`
footer.innerHTML = footerHtml;

// 헤더 마우스 오버 이벤트
let hInner = document.querySelector("header .inner")
let gnb = document.querySelectorAll(".gnb > li");
let navBg = document.querySelector(".navBg");
let wrap = document.querySelector("#wrap");

function headerOver () {
    gnb.forEach((li,idx)=>{
        let snb = li.querySelector(".snb");
        li.addEventListener("mouseenter", ()=>{
            header.classList.add("on");
            if(idx !== 2 && idx !== 3) {
                hInner.classList.add("on");
                snb.classList.add("on");
                wrap.classList.add("on");
            };
        });
        li.addEventListener("mouseleave", ()=>{
            header.classList.remove("on");
            hInner.classList.remove("on");
            if(idx !== 2 && idx !==3) {
                snb.classList.remove("on");
                wrap.classList.remove("on");
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