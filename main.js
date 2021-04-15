document.querySelector(".menu-btn").addEventListener("click",()=>{
    document.querySelector(".main-nav").classList.toggle("show");
});

ScrollReveal().reveal('.whoIAm');
ScrollReveal().reveal('.about',{delay:500});
ScrollReveal().reveal('.galery',{delay:500});
ScrollReveal().reveal('.contact',{delay:500});