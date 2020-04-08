const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions
function showError(input, message) {
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innertext = message;
}


// Event listenerss
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if(username.value === '') {
        showError(username, 'Username is required')
    }else{
        showSuccess(username)
    }
});
