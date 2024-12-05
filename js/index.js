function init(){

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


    const   elcircle1 =document.querySelector('.circle'),
            elfontsize=document.querySelector('.circle p'),
            elCircle=document.querySelector('.bg_cp');

    window.addEventListener('scroll',function(){
        let scrollY = window.pageYOffset;
        let yy= scrollY*0.01;
        let y2=scrollY*0.05;
        let v={
            mc:15*yy,
            mb:100-(y2) 
        };/* mc=원의 최대크기 mb=폰트 스케일 크기*/
        if (1.5<yy &&scrollY < window.innerHeight) {
            elCircle.style=(`clip-path: circle(${v.mc}% at 50% 50%);`);
            elfontsize.style=(`transform:scale(${v.mb}%);`);
            elcircle1.style= `position: fixed; bottom:0;`;
        }        
        else if(scrollY > window.innerHeight){
            elcircle1.style= `position: absolute; bottom:0;`;
            return 0;
        }
    })

}

window.addEventListener('load',init)



var swiper = new Swiper(".mySwiper1", {
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    },
});

var swiper = new Swiper(".mySwiper2", { //세로슬라이드
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});
var swiper = new Swiper(".mySwiper3", {
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
    },
});
var swiper = new Swiper(".mySwiper4", {
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    },
});