document.addEventListener("DOMContentLoaded", function() {
    const addressForm = document.getElementById("addressForm");
    const postalCodeInput = document.getElementById("postalCode");
    const cityInput = document.getElementById("city");
    const stateInput = document.getElementById("state");
    const countyInput = document.getElementById("county");

    // Static data for postal code to city and state mapping
    const postalCodeData = {
        "110001": { city: "New Delhi", state: "Delhi", county: "India" },
        "400001": { city: "Mumbai", state: "Maharashtra", county: "India" },
        "700001": { city: "Kolkata", state: "West Bengal", county: "India" },
        "600001": { city: "Chennai", state: "Tamil Nadu", county: "India" },
        "380001": { city: "Ahmedabad", state: "Gujarat", county: "India" },
        "500001": { city: "Hyderabad", state: "Telangana", county: "India" },
        "560001": { city: "Bengaluru", state: "Karnataka", county: "India" },
        "110002": { city: "Connaught Place", state: "Delhi", county: "India" },
        "600002": { city: "Mount Road", state: "Tamil Nadu", county: "India" },
        "682001": { city: "Kochi", state: "Kerala", county: "India" },
        "226001": { city: "Lucknow", state: "Uttar Pradesh", county: "India" },
        "302001": { city: "Jaipur", state: "Rajasthan", county: "India" },
        "700032": { city: "Howrah", state: "West Bengal", county: "India" },
        "695014": { city: "Thiruvananthapuram", state: "Kerala", county: "India" },
        "110003": { city: "Karol Bagh", state: "Delhi", county: "India" },
        "380013": { city: "Navrangpura", state: "Gujarat", county: "India" },
        "600003": { city: "Parrys Corner", state: "Tamil Nadu", county: "India" },
        "400012": { city: "Parel", state: "Maharashtra", county: "India" },
        "390001": { city: "Rajmahal Road", state: "Gujarat", county: "India" },
        "281001": { city: "Mathura", state: "Uttar Pradesh", county: "India" },
        "560002": { city: "Bangalore", state: "Karnataka", county: "India" },
        "201301": { city: "Noida", state: "Uttar Pradesh", county: "India" },
        "273001": { city: "Gorakhpur", state: "Uttar Pradesh", county: "India" },
        "273003": { city: "Gorakhpur", state: "Uttar Pradesh", county: "India" },
        "411047": { city: "Pune", state: "Maharashtra", county: "India" },
        // Add more postal code data here...
    };

    function handleGeocodingResults() {
        const postalCode = postalCodeInput.value;
        const data = postalCodeData[postalCode];

        if (data) {
            // Fill city and state fields with static data
            cityInput.value = data.city;
            stateInput.value = data.state;
            countyInput.value = data.county;
        } else {
            console.log('No results found for this ZIP code.');
        }
    }

    // Handle postal code input changes
    postalCodeInput.addEventListener("change", handleGeocodingResults);

    
    
            // Simulated user data from the previous page
            const userData = {
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                phoneNumber: "123-456-7890"
            };
        
            // Simulated order history
            const orderHistory = [];
        
            // Set user information
            addressForm.addEventListener("submit", function(event) {
                event.preventDefault();
        
                const streetAddress = document.getElementById("streetAddress").value;
        
                // Collect shipping address data
                const addressData = {
                    streetAddress,
                    postalCode: postalCodeInput.value,
                    city: cityInput.value,
                    state: stateInput.value,
                    country: countryInput.value
                };
        
                // Display user information
                console.log("User Information:");
                console.log("First Name: " + userData.firstName);
                console.log("Last Name: " + userData.lastName);
                console.log("Email Address: " + userData.email);
                console.log("Phone Number: " + userData.phoneNumber);
        
                // Display shipping address
                console.log("Shipping Address:");
                console.log(addressData);
        
                // Here, you can add the order to the order history and send it to your API server for storage.
                orderHistory.push({
                    user: userData,
                    address: addressData,
                    success: true // Simulated success status
                });
        
                // Simulated order history
                console.log("Order History:");
                console.log(orderHistory);
            });
        
});



