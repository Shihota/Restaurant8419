let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scolled");
    }else{
        nav.classList.remove("header-scolled");

    }
}

let navBer = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBer.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show");
    })
    
})