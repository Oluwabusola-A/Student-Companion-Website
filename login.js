//signup function

const signup = e =>{
    let email=document.getElementById('email').value,
        password=document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist= formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data=>
            data.email.toLowerCase() == email.toLowerCase()
            );

    if(!exist){
        formData.push({email, password});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('email').focus();
        alert("Account has been created. \n\nPlease sign In using the link below.");

    }
    else{
        addEventListenerlert("Ooopss... Duiplicate found!!!\nYou have already signed up with those details");
    }
    e.preventDefault();
}

//signin function
const signIn= e =>{
    let email=document.getElementById('email').value,
    password=document.getElementById('password').value;

let formData = JSON.parse(localStorage.getItem('formData')) || [];

let exist= formData.length &&
JSON.parse(localStorage.getItem('formData')).some(data=> data.email.toLowerCase());
if(!exist){
    alert("Incorrect login credentials");
}
else{
    location.href= "/indexx.html";
}
e.preventDefault();
}