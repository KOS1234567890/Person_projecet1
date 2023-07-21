
// 메인 텍스트 이동하기
const widthscroll =document.querySelector('.txtbox b'),
      elTxtbox =document.querySelector('.txtbox'),
      elconbg=document.querySelector('.contain_bg'),
      elmovetb=document.querySelector('.movetxtbg');
window.addEventListener("scroll",function() {
    
    let yyy= window.pageYOffset*0.1;
    console.log(yyy);
    
    if(window.pageYOffset < window.innerHeight){
        elmovetb.style=`position: fixed; bottom:0;`;
        widthscroll.style=(`transform:translateX(-${yyy}rem)`)
    }
    else if(yyy>=100){
        elmovetb.style= `position: absolute; bottom:0;`;
        return 0;
    }
})

// 2번째 스크롤 내릴시 원커지면서 작동하기
function init(){
  
  
    const   elcircle1 =document.querySelector('.circle'),
            elfontsize=document.querySelector('.circle p'),
            elCircle=document.querySelector('.bg_cp'),
            elRotateO = document.querySelector('.rotateO');

    let elFix = elcircle1.getBoundingClientRect(),
        elFixEnd = elFix.y + elFix.height;

    window.addEventListener('scroll',function(){
        console.log(elFix);
        console.log(window.pageYOffset <= elFixEnd);
        let yy= window.pageYOffset*0.01;
        let y2=window.pageYOffset*0.05;
        let v={
            mc:10*yy-325,
            mb:280-(y2) //폰트 스케일 크기
        };/* mc=원의 최대크기 mf=폰트 최대 사이즈*/
        
        if (window.pageYOffset >= elFix.y && window.pageYOffset <= elFixEnd) {
            elCircle.style=(`clip-path: circle(${v.mc}% at 50% 50%);`);
            elfontsize.style=(`transform:scale(${v.mb}%);`);
            elcircle1.style= `position: fixed; top:0;`;
        }  else if(window.pageYOffset < elFix.y){
            elcircle1.style=`position: absolute;`
        }
        if(window.pageYOffset > elFixEnd){
            elcircle1.style= `position: absolute; bottom:0; top:auto;`;
            return 0;
        }
    })
  
}
window.addEventListener('load',init)

//리스트 클릭시 다른 클래스를 추가해서 리스트 보여주기

const elFlooryear =document.querySelectorAll('.row_flex span'),
      elListparty =document.querySelectorAll('.list_party >ul'),
      elUl1=document.querySelector('.ul1'),
      elUl2=document.querySelector('.ul2'),
      elUl3=document.querySelector('.ul3');
let num=0;
      //각 메뉴들을 클릭햇을때 해당 메뉴의 클래스에 on을추가하여 display를 block로 만들어주기
elFlooryear.forEach(function(ele,key){
    ele.onclick =function(){
        console.log(key);
        elListparty[num].classList.remove ('on');
        elListparty[key].classList.add ('on');
        num=key;
    }
})
//elFlooryear 에 잇는 span을 선택하면 list_party의 ul값을 선택할수잇음?


//지도 누르면 연결하기

const elFigmap =document.querySelectorAll('.figmap .map_fig'),
        elMapli=document.querySelectorAll('.map_list li');

let m_num=0;
elMapli.forEach(function(ele,key){
    ele.onclick=function(){
        elFigmap[m_num].classList.remove('map_on');
        elMapli[m_num].classList.add('txt_color_g');
        elFigmap[key].classList.add('map_on');
        elMapli[key].classList.add('txt_color_g');
        m_num=key;
    }
})