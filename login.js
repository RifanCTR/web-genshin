// Toggle between login and signup forms
document.getElementById('show-signup').addEventListener('click', function() {
    document.querySelector('.login-form').classList.remove('active');
    document.querySelector('.signup-form').classList.add('active');
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.signup-form').classList.remove('active');
    document.querySelector('.login-form').classList.add('active');
});

// Default active form
document.querySelector('.login-form').classList.add('active');
