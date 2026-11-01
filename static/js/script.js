document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Thank you for signing up! Your account has been created.");
            signupForm.reset();
            if (typeof $ !== 'undefined' && $('#signupModal').length) {
                $('#signupModal').modal('hide');
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert("Login successful!");
            loginForm.reset();
            if (typeof $ !== 'undefined' && $('#loginModal').length) {
                $('#loginModal').modal('hide');
            }
        });
    }
});
