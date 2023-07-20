
AOS.init();

const elUlgroup =document.querySelectorAll('.ul_group >li'),
    elUl=document.querySelector('.ul_group');

//해당 페이지 칸에 도달했을 경우 발동 


window.addEventListener('scroll',function(){
    let elUlpt = elUl.getBoundingClientRect();
    let a =window.pageYOffset;
    // console.log(elUlpt);
    if(elUlpt.height<=elUlpt.y && 690>=elUlpt.y){
        let num=0
        //해당 영역에 도달하엿을경우 발동 어디에다가?
        // elUl.style=(`opacity:1;`)
        //투명도를 1로 만들어주고 왼쪽으로 이동할수잇게 구현 하기
        // opacity:1; left: 0px; margin-right: -30px;
        
    }

});


//리스트 클릭시 해당 영역 보여주기 ol부분

const elOli=document.querySelectorAll('ol >li'),
      elBox1=document.querySelectorAll('.box1'),
      elMain3list=document.querySelectorAll('.main3_Pli');
      let num=0; //이전에 발생한 값

      elBox1.forEach(function(ele,key){
        ele.onclick=function(){ //.box1클릭시 발동
            
            if(elMain3list[key].classList.contains('off')){
                elMain3list[num].classList.add('off');
                elMain3list[key].classList.remove('off'); //누른 값의 off를 제거해서 해당 컨텐츠 보여줌
            }else{
                this.classList.remove('off');
            };
            num=key;
            console.log(key);
            
        }
    });

//  1번째 li클릭시 발동 해야할것 => 1번째 box1의 off가 추가되면서 해당 화면 감추기, 

