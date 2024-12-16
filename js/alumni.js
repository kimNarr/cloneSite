let tabList = document.querySelectorAll(".tabArea button");
let techTap = document.querySelector(".techTab");
let applyTap = document.querySelector(".applyTab");
let techList = document.querySelector(".cateList .tech");
let applyList = document.querySelector(".cateList .applyUse");

function alumniTab() {
    tabList.forEach((tab, idx)=>{
        tab.addEventListener("click", ()=>{
            tab.classList.add("on");
            for(let i = 0 ; i < tabList.length ; i++){
                if(i == idx){
                    continue;
                };
                if(tabList[i].classList.contains("on")){
                    tabList[i].classList.remove("on");
                };
            };
            if(techTap.classList.contains("on")) {
                techList.style.display = "block";
                applyList.style.display = "none";
            } else {
                techList.style.display = "none";
                applyList.style.display = "block";
            }
        });
    })
}
alumniTab()