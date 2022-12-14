"use strict"


const signIn = $('#sign-in');
signIn.addEventListener('submit', (e)=>{
    e.preventDefault();

    let data = {
        "username":e.target.name.value,
        "password":e.target.pasword.value
    }
    console.log(data);


    if(data.username.length ===0 || data.password.length===0){
        console.log('enter username and pasword');
    }else{
        fetch('https://task.samid.uz/v1/user/sign-in' ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",   
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((res2) => {
            console.log(res2);
            if(res2.code=="-1"){
                $('.err').innerHTML =  res2.errors
            }else{
                alert('Succses');
                localStorage.setItem('token',res2.data.token)
                localStorage.setItem('namess',res2.data.username)
                url()
                // console.log(res2);
            }
        })
        .catch((err) => {console.log(err);})
    }

    // fetch('https://task.samid.uz/v1/user/sign-in' ,{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",   
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then((res) => res.json())
    // .then((res2) => {
    //     localStorage.setItem('token',res2.data.token)
    // })
    // .catch((err) => {$('.err').innerHTML = `${err}`; console.log(err);})

    // url();
})

// url()
function url(){
    window.location.assign('../pages/home.html')
}




console.log(localStorage.getItem('namess'));

