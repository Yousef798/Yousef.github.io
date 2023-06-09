let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('bx');
    navbar.classList.toggle('open');
};


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform any necessary actions with the form data
    // For example, you can send the data to a server using AJAX
  
    // Display an alert with the form data
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });