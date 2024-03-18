# 개인 포트폴리오 첫번째 ) 클론코딩 : EasyNetWorks

웹 개발 기술 역량을 증진시키기 위해 학습과 연습이 중요합니다. 그중에서도 제일 중요한 것은 경험을 쌓는 것이라고 생각합니다.
다른 개발자가 어떻게 디자인을 하였고 전체적으로 마크업을 어떻게 진행했는지를 경험하면서 더 많은 것을 배울 수 있습니다. 

EasyNetworks의 코딩 프로젝트를 선택한 이유는 이미 한번 리뉴얼된 사이트라 최신 트렌드를 파악할 수 있다고 생각했습니다.
이 프로젝트를 통해 현재의 웹 개발 트렌드와 기술을 파악하고 적용할 수 있었으며, 더 나아가 프로젝트를 완성하면서 실질적인 웹 개발 경험을 얻을 수 있었습니다.

## 최근 업데이트 목록 (ver 1.0.1/2024.03.18)
- README.md 업데이트
- 전체적인 링크 호버 시 색깔 나오게 수정
- 애매한 틀 수정

## 제작자)
권오성

## 제작기간) 
 6월~7월 (공부 4시간 + 제작 4시간)

## 개발 환경) 
- `visual studio code`
- `HTML`
- `CSS`
- `JavaScript`

## 페이지 구성)
메인페이지 회사소개 사업분야 홍보센터

## 주요기능 

#### 메인페이지
* 자바스크립트로 기능 구현 및 스와이퍼 플러그인을 사용하여 제작
* 전체적인 반응형 작업
#### 회사소개
* 가로 스크롤 기능 
#### 사업분야
* 애니메이션 기능
* 스크롤에 따라 기능 구현
#### 홍보센터
* 애니메이션 기능

## 예시 코드(JS)
```
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
        let yy= window.pageYOffset*0.01;
        let y2=window.pageYOffset*0.05;
        let v={
            mc:15*yy,
            mb:100-(y2) 
        };/* mc=원의 최대크기 mb=폰트 스케일 크기*/
        if (1.5<yy && window.pageYOffset < window.innerHeight) {
            elCircle.style=(`clip-path: circle(${v.mc}% at 50% 50%);`);
            elfontsize.style=(`transform:scale(${v.mb}%);`);
            elcircle1.style= `position: fixed; bottom:0;`;
        }        
        else if(window.pageYOffset > window.innerHeight){
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
```
