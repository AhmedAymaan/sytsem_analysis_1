document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const specialization = document.getElementById("specialization").value;
    const dates = document.getElementById("dates").value;
  
    const responseMessage = document.getElementById("responseMessage");
  
    try {
      const response = await fetch("https://pleasant-comfort-production-f2ef.up.railway.app/doctor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, username, email, password, phone, specialization, dates })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        responseMessage.textContent = "Sign-up successful!";
        responseMessage.style.color = "green";
      } else {
        responseMessage.textContent = data.message || "Sign-up failed. Please try again.";
        responseMessage.style.color = "red";
      }
    } catch (error) {
      responseMessage.textContent = "Error connecting to the server.";
      responseMessage.style.color = "red";
    }
  });
  
