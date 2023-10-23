var options = {
    "key": "rzp_test_xkkA99Z3D9jiWf", // //Enter the Key ID generated from the Dashboard
    "amount": last_price*100, // //Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Auto Parts",
    "description": "Test Payment",
    "image": "https://img.freepik.com/premium-vector/caduceus-symbol-made-using-bird-wings-poisonous-snakes-healthcare-conceptual-vector-illustration_570429-5842.jpg",
    // //"order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
    // // "account_id": "acc_Ef7ArAsdU5t0XL",
    "handler": function (response){
       // // alert(response.razorpay_payment_id);
      //  // alert(response.razorpay_order_id);
       // // alert(response.razorpay_signature);
       window.location.href = "Product.html";
    } 
};
var rzp1 = new Razorpay(options);
document.getElementById('payment_btn').onclick = function(e){
    rzp1.open();
    e.preventDefault();
    
}