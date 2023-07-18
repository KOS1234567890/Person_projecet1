$('body').prepend('<header></header>');
$('header').load('./header.html .header',menu);

$('body').append('<footer></footer>');
$('footer').load('./header.html .footer1,.footer2');

function menu(){
    // 헤더 메뉴 내리고 올리기
    const elHeader=document.querySelector('.header')
    let pos ={x:0,x2:0,status:true};

    window.addEventListener('scroll',function(){
        pos.y=window.pageYOffset;
        //삼항연산자
        pos.status=(pos.y>pos.y2)? true:false;
        pos.y2=pos.y;


        if(pos.status){
            elHeader.classList.add('active')
        }else{
            elHeader.classList.remove('active')
        }
    })
}



