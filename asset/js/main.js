document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.signup-form').addEventListener('submit', function(event) {
        // Prevent form submission to handle validation first
        event.preventDefault();

        // Retrieve input values
        const username = document.getElementById('user').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('signup-pass').value;
        const phone = document.getElementById('phone').value;

        let isValid = true;

        // Clear previous error messages
        document.getElementById("usernameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("phoneError").textContent = "";

        // Validate username: 
        if (username.length < 8 || username.length > 255) {
            document.getElementById("usernameError").textContent = "*Username must be between 8 and 255 characters.";
            // alert('Username must be between 8 and 255 characters.');
            isValid = false;
        }

        // Validate email:
        const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        
        // Check email length & Check email format using regex
        if (email.length < 8 || email.length > 255) {
            document.getElementById("emailError").textContent = "*Email must be between 8 and 255 characters.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "*Invalid email format. Ensure it follows 'user@domain.com' format.";
            isValid = false;
        }

        // Validate password:
        const passwordRegex = /^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*])/;
        if (password.length < 8 || password.length > 255 || !passwordRegex.test(password)) {
            document.getElementById("passwordError").textContent = "*Password must be between 8 and 255 characters and contain at least one symbol.";
            // alert('Password must be between 8 and 255 characters and contain at least one capital letter and one symbol.');
            isValid = false;
        }

        // Validate phone number:
        const phoneRegex = /^\+962 7(7|8|9) \d{7}$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById("phoneError").textContent = "*Invalid phone number. Must be in the format +962 7(7,8,9) 1111111.";
            // alert('Invalid phone number. Must be in the format +962 7(7,8,9) 1111111.');
            isValid = false;
        }

        // If all fields are valid, show success message
        if (isValid == true){
            alert('Registration successful!');
        }
        
    });
});
