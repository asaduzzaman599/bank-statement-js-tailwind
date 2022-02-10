// login page script 

document.getElementById('login-button').addEventListener('click',function(){
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    if(passwordInput.value == ''){
        passwordInput.style.border ='2px solid red'
    }else{
        passwordInput.style.border ='2px solid blue'
    }
    
    if(emailInput.value == ''){
        emailInput.style.border ='2px solid red'
    }else{
        emailInput.style.border ='2px solid blue'
    }
    if(emailInput.value.includes('@') && emailInput.value.includes('.') && emailInput.value != '' && passwordInput.value !=''){
        window.location.href();
    }else{
        emailInput.style.border ='2px solid red'
    }
})