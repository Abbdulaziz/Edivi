"use strict"


const signIn = $('#sign-up');


signIn.addEventListener('submit', (e)=>{
    e.preventDefault();
    // let user = $('#name_req').value.trim();
    // let email = $('#email').value.trim();
    // let pasword = $('#pasword').value.trim();
    // console.log(user);
    // console.log(email);
    // console.log(pasword);
console.log(e.target.name.value);

    let data = {
        "username":e.target.name.value.trim(),
        "email":e.target.email.value.trim(),
        "password":e.target.pasword.value.trim()
    }
    console.log(data);

    if(data.username.length ===0|| data.email.length===0 || data.password.length===0){
        console.log('enter username and pasword');
    }else{
        fetch('https://task.samid.uz/v1/user/sign-up' ,{
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
                url()
            }
        })
        .catch((err) => {console.log(err);})
    }
    

    // url()
})

// url()
function url(){
    window.location.assign('../pages/login.html')
}