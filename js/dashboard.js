// login page script 

document.getElementById('login-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    if (passwordInput.value == '') {
        passwordInput.style.border = '2px solid red'
    } else {
        passwordInput.style.border = '2px solid blue'
    }

    if (emailInput.value == '') {
        emailInput.style.border = '2px solid red'
    } else {
        emailInput.style.border = '2px solid blue'
    }
    if (emailInput.value.includes('@') && emailInput.value.includes('.') && emailInput.value != '' && passwordInput.value != '') {
        if (emailInput.value == "a@b.c" && passwordInput.value == '1234') {
            window.location.href = 'account.html';
        } else {
            document.getElementById('errorMassage').innerText = " invalid Email or password";
        }
    } else {
        emailInput.style.border = '2px solid red'
    }
})