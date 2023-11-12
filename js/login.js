document.getElementById('btn-submit').addEventListener('click', function () {

    const emailInputField = document.getElementById('email-input-field');
    const email = emailInputField.value;

    const passwordInputField = document.getElementById('password-input-field');
    const password = passwordInputField.value;

    if (email === 'tanveer@foysal.com' && password === 'Tanveer') {
        window.location.href = 'https://tanveer1912.github.io/functional-Baap-Er-Bank/';
    }
    else {
        alert('Please Valid Email or Password')
    }
})