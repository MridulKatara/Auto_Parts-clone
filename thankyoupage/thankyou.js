
// Function to switch to the second image and redirect after 2 seconds
setTimeout(function() {
    const image = document.getElementById('image');
    image.src = "../image/undraw_order_confirmed_re_g0if.svg";
    const overlay = document.getElementById('overlay');
    overlay.innerText = "Order confirmed";
    overlay.classList.add('overlay-second');
    setTimeout(function() {
        window.location.href = "homepage.html";
    }, 3000); // Redirect after 2 seconds
}, 2000); // Switch image after 2 seconds
