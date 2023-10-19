document.addEventListener("DOMContentLoaded", function() {
    const personalDetailsForm = document.getElementById("personalDetailsForm");
    const submitButton = document.getElementById("submitButton");

    // Add an event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Redirect to the address page
        window.location.href = "address.html";
    });

    // Add an event listener to the form submission
    personalDetailsForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        // You can do further processing with this data, such as sending it to the server or storing it locally.

        console.log("User Information:");
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Email Address: " + email);
        console.log("Phone Number: " + phoneNumber);

        // Redirect to the address page
        window.location.href = "address.html";
    });
});
