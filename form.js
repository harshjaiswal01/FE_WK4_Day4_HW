document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form')

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === '' || email === '' || message==='') {
            alert("Please fill all fields before submission");
            return
        }

        const formData = {
            name: name,
            email: email,
            message: message
        }

        console.log("Form Submitted", formData)

        alert("Thank you for contacting us!")


    })
})