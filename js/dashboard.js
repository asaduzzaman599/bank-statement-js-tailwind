// login page script 

document.getElementById('login-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    
    if (emailInput.value == '') {
        alert('Email Can Not Empty');
    }
    else if (passwordInput.value == '') {
        alert('Password Can Not Empty');
    } 
    else if (emailInput.value.includes('@') && emailInput.value.includes('.') ) {
        if (emailInput.value == "a@b.c" && passwordInput.value == '1234') {
            window.location.href = 'account.html';
        } else {
            alert("invalid Email or password. Use email: a@b.c and password: 1234");
        }
    } else {
        alert("Wrong Email Pattern");
    }
})