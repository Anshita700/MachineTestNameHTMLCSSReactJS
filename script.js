document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  // First Name Validation
  if (firstName === "") {
    document.getElementById('firstNameError').innerText = "First Name is required";
    valid = false;
  } else {
    document.getElementById('firstNameError').innerText = "";
  }

  // Last Name Validation
  if (lastName === "") {
    document.getElementById('lastNameError').innerText = "Last Name is required";
    valid = false;
  } else {
    document.getElementById('lastNameError').innerText = "";
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('emailError').innerText = "Please enter a valid email";
    valid = false;
  } else {
    document.getElementById('emailError').innerText = "";
  }

  // Phone Number Validation
  const phonePattern = /^\d{10}$/;
  if (!phone.match(phonePattern)) {
    document.getElementById('phoneError').innerText = "Please enter a valid phone number";
    valid = false;
  } else {
    document.getElementById('phoneError').innerText = "";
  }

  // Password Validation
  if (password.length < 8) {
    document.getElementById('passwordError').innerText = "Password must be at least 8 characters";
    valid = false;
  } else {
    document.getElementById('passwordError').innerText = "";
  }

  // If the form is valid, log the data
  if (valid) {
    console.log({
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      password: password
    });
  }
});
