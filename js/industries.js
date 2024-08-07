
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

document.addEventListener('DOMContentLoaded', function() {
    // 카테고리별 링크 선택자
    const selectors = [
        '.Info_macine a',
        '.Office_macine a',
        '.MediaEvent_macine a',
        '.Furniture_macine a',
        '.HomeAppliance_group a'
    ];

    // 메뉴 클릭 처리 함수
    function handleMenuClick(event) {
        event.preventDefault();
        const targetClass = this.getAttribute('data-target');
        
        document.querySelectorAll('.main3_Plf_bt ul').forEach(ul => {
            ul.classList.add('hidden');
        });
        document.querySelector(`.${targetClass}`).classList.remove('hidden');
    }

    // 모든 링크에 클릭 이벤트 리스너 추가
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(link => {
            link.addEventListener('click', handleMenuClick);
        });
    });

    // box1 클릭 이벤트 처리 함수
    function handleBox1Click() {
        // 현재 클릭된 box1의 상위 li 요소 찾기
        const listItem = this.closest('li');
        if (listItem) {
            // 상위 li 내에서 main3_Pli 요소 보이기
            const main3Pli = listItem.querySelector('.main3_Pli');
            if (main3Pli) {
                main3Pli.classList.remove('off');
            }

            // main3_Pli 내에서 main3_Plf_bt 찾기
            const main3PliBt = listItem.querySelector('.main3_Plf_bt');
            if (main3PliBt) {
                // 모든 ul 요소에 hidden 클래스 추가
                main3PliBt.querySelectorAll('ul').forEach(ul => {
                    ul.classList.add('hidden');
                });

                // 가장 상단에 위치한 첫 번째 ul에서 hidden 클래스 제거
                const firstUl = main3PliBt.querySelector('ul');
                if (firstUl) {
                    firstUl.classList.remove('hidden');
                }
            }
        }
    }

    // 모든 box1 요소에 클릭 이벤트 리스너 추가
    document.querySelectorAll('.box1').forEach(box1 => {
        box1.addEventListener('click', handleBox1Click);
    });
});