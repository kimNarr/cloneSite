// subpage title animation
let subTitle = document.querySelector(".sub .inner .title h2");
let subText = document.querySelector(".sub .inner .title p");
let subSimbol = document.querySelector(".sub .inner .simbol");

function subTitleAnimation() {
    subTitle.classList.add("on");
    subText.classList.add("on");
    subSimbol.classList.add("on");
}
subTitleAnimation()