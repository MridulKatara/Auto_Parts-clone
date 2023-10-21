
const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// firebase initialization
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwkZk758RQlSQtYBlYggjvW5yGYslKvS0",
  authDomain: "loginpage-a7eda.firebaseapp.com",
  projectId: "loginpage-a7eda",
  storageBucket: "loginpage-a7eda.appspot.com",
  messagingSenderId: "778317871264",
  appId: "1:778317871264:web:592b5eae24a2cef9cdb1c5",
  measurementId: "G-D74J2PB7HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// document.getElementById("sign_id").addEventListener("submit", async (e) => {
document.querySelector("#sign_id").addEventListener("click", async (e)=>{
  e.preventDefault();
  //  console.log("clicked");
  let email = document.querySelector("#signup_email").value;
  let password = document.querySelector("#signup_password").value;
const auth = await getAuth();
await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log("signedUp")
    const user = userCredential.user;
    swal({
      title: "Success",
      text: "Signed in Successfully",
      icon: "success",
      buttons: false,
      timer: 2000, // Auto-close the alert after 2 seconds
      customClass: "custom-swal-success", // Apply custom success styles
    });
      document.querySelector("#signup_email").value = "";
      document.querySelector("#signup_password").value = "";
      document.querySelector("#signup_username").value = "";
    
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;


    switch (errorCode) {
      case ("auth/weak-password"):
    
        errorMessage = "Weak password";
        break;
      case ("auth/email-already-in-use"):
        errorMessage = "Email already exists";
        break;
      // Add more error code mappings as needed

      default:
        errorMessage = "An error occurred";
        break;
    }
    swal({
      title: "Error",
      text: errorMessage,
      icon: "error",
      buttons: false,
      timer: 2000, // Auto-close the alert after 2 seconds
      customClass: "custom-swal-error", // Apply custom error styles
    });
    console.log(errorMessage);
    // ..
  });

});


document.querySelector("#log_id").addEventListener("click", async(e)=>{

  e.preventDefault();

  let email = document.querySelector("#signin_email").value;
  let password = document.querySelector("#signin_password").value;

  const auth = await getAuth();
await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // console.log("hi")
    const user = userCredential.user;
    console.log(user)
    console.log("Logged In Sucessful");
    swal({
      title: "Success",
      text: "Logged in Successfully",
      icon: "success",
      buttons: false,
      timer: 2000, // Auto-close the alert after 2 seconds
      customClass: "custom-swal-success", // Apply custom success styles
    });
    window.location.href = "/homepage.html"; 
    // ...
  })
  .catch((error) => {
    // console.log("hi")
    const errorCode = error.code;
    // console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    swal({
      title: "Error",
      text: "Invalid Credentials",
      icon: "error",
      buttons: false,
      timer: 2000, // Auto-close the alert after 2 seconds
      customClass: "custom-swal-error", // Apply custom error styles
    });
    
  });

});

// const auth = getAuth();
// const someDataElement = document.getElementById('some-data');

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in
//     const uid = user.uid;
    
//     // Fetch additional user data from Firebase Firestore
//     firestore.collection('users').doc(uid).get()
//       .then((doc) => {
//         if (doc.exists) {
//           const userData = doc.data();
//           // Update the UI with user-specific data
//           someDataElement.textContent = `Welcome, ${userData.displayName}!`;
//         } else {
//           console.log('User data not found.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });
    
//     // Show a "Log Out" button and handle the log out action
//     const logOutButton = document.getElementById('log-out');
//     logOutButton.style.display = 'block';
//     logOutButton.addEventListener('click', () => {
//       signOut(auth).then(() => {
//         // User is now signed out
//         // Update UI, maybe redirect, etc.
//       }).catch((error) => {
//         console.error('Error signing out:', error);
//       });
//     });
//   } else {
//     // User is signed out
//     someDataElement.textContent = 'Please sign in to access your data.';
//   }
// });


// SIGNOUT

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });