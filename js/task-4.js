`use strict`

const form = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault(); 
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: email,
        password: password
    };
    console.log(formData);
    form.reset();
}

form.addEventListener("submit", handleSubmit)