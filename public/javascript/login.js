


// sign up logic

async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            document.location.replace('/character');
            console.log('success');
        } else {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorText').textContent = 'This email already exists';
        }

    }
}


//log in logic
async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/character');
        } else {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorText').textContent = 'Your are using incorrect credentials';
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.getElementById('errorMessage').onclick = function closeModal() {
    document.getElementById('errorMessage').style.display = 'none';
}
