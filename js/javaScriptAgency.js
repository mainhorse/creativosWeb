
let btnHome = document.getElementById('btnHome');
let modal = document.getElementById('modal');
let asideLeft = document.getElementById('leftModal');
let asideRight = document.getElementById('rightModal');
let asideLog = document.getElementById('asideRight01');
let stateBook = 0;
let closeModal = document.getElementById('closeModal');
let viewOneCard2 = document.getElementById('asideRight01');

btnHome.addEventListener('mouseover', ()=>{
    window.location = "../front/index.php";
});

viewOneCard2.addEventListener('mouseover', ()=>{
    viewOneCard2.style.animationPlayState = 'paused';
});

viewOneCard2.addEventListener('mouseout', ()=>{
    viewOneCard2.style.animationPlayState = 'running';
});


asideLog.addEventListener('click', ()=>{
    modal.style.transform = 'rotateY(0deg)';
});

asideLeft.addEventListener('click', ()=>{
    if(stateBook == 0){
        asideLeft.style.transform = 'rotateY(-180deg)';
        stateBook++;
    } else{
        asideLeft.style.transform = 'rotateY(0deg)';
        stateBook = 0;
    } 
});

closeModal.addEventListener('click', ()=>{
    modal.style.transformOrigin = 'left';
    modal.style.transform = 'translateX(-100%)';
    
});
