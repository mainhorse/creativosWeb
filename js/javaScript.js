
const fondos = ['#367FFF',
                '#FFF',
                '#367FFF',
                '#FFF',
                '#367FFF',
                '#FFF'];

const back_grounds = ['img/Marketingdigital.png','img/desarrolloweb.png','img/communityManager.png',
                      'img/diseñoAppMobil.png','img/SeoAndSem.png','img/chivaColombiano.png'];
// view1
let view0 = document.getElementById('view0');
let view11 = document.getElementById('view11');
let botonformulario = document.getElementById('btnView1'); 
let viewpage01 = document.getElementById('view01');
let returnView1 = document.getElementById('returnView1');

// view2
//let contProject = document.getElementById('contProject'); 
let view2 = document.getElementById('view2'); 
let btnView2 = document.getElementById('btnView2');  
let contProject = document.getElementById("conProject"); 

// view5
let mainFive = document.getElementById('mainFive');
let btnView5 = document.getElementById('btnView5');
let mainFiveOne = document.getElementById('mainFiveOne');
let returnFive = document.getElementById('returnFive');


botonformulario.addEventListener('click', ()=>{
   window.location = "../front/agency.php";
});

btnView2.addEventListener('click', ()=>{
    window.location = "../front/agency.php";
});

btnView5.addEventListener('click', ()=>{
    window.location = "../front/contac.php";
});
 
function colorTitle(value){
    if(value %2 != 0){
        val = value;
        document.getElementsByTagName('nav')[val].style.color = '#4b4b4b';
        document.getElementsByClassName('main')[val].style.color = '#4b4b4b';
        document.getElementsByClassName('btnCont')[value].style.color = '#4b4b4b';
        document.getElementsByClassName('btnCont')[value].style.border = '2px solid #4b4b4b';
    } else {
        document.getElementsByTagName('nav')[value].style.color = 'white';                
        document.getElementsByClassName('main')[value].style.color = 'white';
        document.getElementsByClassName('btnCont')[value].style.color = 'white';
        document.getElementsByClassName('btnCont')[value].style.border = '2px solid white';
    }
}                      
let con = 0;  
var data1;
var data2;

document.addEventListener('touchstart',function (e){
    deltaYStart = Math.round(e.touches[0].clientY);
    data1 = deltaYStart;
});

document.addEventListener('touchmove', function (e){
    deltaYEnd = Math.round(e.changedTouches[0].clientY);
    data2 = deltaYEnd;
})

document.addEventListener('touchend', function (){
    value = data2 -data1;
    let e = {
        keyCode : '40'
    }
    if(value >= 0){
        e.keyCode = '40';
        check(e);
    }else if(value < 0){
        e.keyCode = '38';
        check(e);
    }
})


window.onkeyup = function checkin(e){
    check(e);
};

function check(e) {
    if (e.keyCode == '38') {
        if(con < 5){
            con++;
            let viewBefore = 'view' + (con-1);
            let viewAfter = 'view' + con; 
            colorTitle(con);
            document.getElementsByClassName("asideRight")[con].style.backgroundImage =  "url('" + back_grounds[con] + "')";
            document.getElementsByClassName("containerView")[0].style.backgroundColor = fondos[con];
            document.getElementById(viewAfter).style.transform = 'translateY(0%)';
            document.getElementById(viewBefore).style.transform = 'translateY(-100%)';
        }
       
    }
    else if (e.keyCode == '40') {
        if(con > 0){
            con--;
            let viewBefore = 'view' + (con);
            let viewAfter = 'view' + (con + 1); 
            colorTitle(con);
            document.getElementsByClassName("asideRight")[con].style.backgroundImage =  "url('" + back_grounds[con] + "')";
            document.getElementsByClassName("containerView")[0].style.backgroundColor = fondos[con];
            document.getElementById(viewBefore).style.transform = 'translateY(0%)';
            document.getElementById(viewAfter).style.transform = 'translateY(100%)';
        }
    }
}


