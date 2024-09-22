document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let valid = true;

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        valid = false;
        errorMessages.innerHTML += '<p>Name is required.</p>';
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMessages.innerHTML += '<p>Invalid email format.</p>';
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        valid = false;
        errorMessages.innerHTML += '<p>Password must be at least 8 characters long.</p>';
    }

    // Confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        errorMessages.innerHTML += '<p>Passwords do not match.</p>';
    }

    // Validate age
    const age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age < 18 || age > 100) {
        valid = false;
        errorMessages.innerHTML += '<p>Age must be a number between 18 and 100.</p>';
    }

    // Validate terms and conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        valid = false;
        errorMessages.innerHTML += '<p>You must accept the terms and conditions.</p>';
    }

    if (valid) {
        // Form is valid, submit it
        alert('Registration successful!');
        // You can uncomment the following line to submit the form
        // event.target.submit();
    }
});

// You can add a similar event listener for the login form with its own validation