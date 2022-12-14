let sal = $('.sal').innerHTML = localStorage.getItem('namess');


let button = $('.bx');
let manu = $('.manu');

button.addEventListener('click', (e) => {
    if(manu.classList.length===2){
        manu.classList.add('top')
    }else{
        manu.classList.remove('top')
    }
}, )


let exit = $('.exit');

exit.addEventListener('click' ,() =>{
    alert('san hozir chiqib ketasan');
    localStorage.clear();
    url();
})

function url(){
    window.location.assign('../pages/login.html')
}