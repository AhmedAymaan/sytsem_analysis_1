// Get the form element and the response message container
const form = document.getElementById('signupForm');
const responseMessage = document.getElementById('responseMessage');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const doctorData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        specialization: document.getElementById('specialization').value,
        dates: document.getElementById('dates').value
    };

    // Send the data to the API using fetch
    fetch('https://pleasant-comfort-production-f2ef.up.railway.app/doctor/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Indicating the content type is JSON
        },
        body: JSON.stringify(doctorData) , // Convert the form data to JSON
    })
    .then(response => response.json())  // Parse the JSON response
    .then(data => {
        console.log('Success:', data);  // Log success response
        responseMessage.textContent = "Signup successful!";
        responseMessage.style.color = "green";
    })
    .catch((error) => {
        console.error('Error:', error);  // Log error response
        responseMessage.textContent = "Signup failed. Please try again.";
        responseMessage.style.color = "red";
    });
});
