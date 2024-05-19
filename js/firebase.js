// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase  ,ref ,set, child, update , remove} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// let provider = new auth.GoogleAuthProvider()
const database = getDatabase();








// var namebox = document.getElementById('full_name');
// var email = document.getElementById('email');
// var password = document.getElementById('password');


// // function insert(){
//   set(ref(database , "Users/" + uid.value ),{
//     Name: namebox.value,
//     Email: email.value,  
//     Password: password.value 
//    }).then(()=>{
//      alert("Data stored successfully!!");
//    }).catch((error)=>{
//      alert("Uncessful, error"+error);
//    })
// }

// const database = firebase.database(app);

// function writeUserData(userId, name, email) {
// const reference = ref(database , 'user/' + userId);

//   set(reference(database, 'users/' + userId), {
//     username: name,
//     email: email,
//     // profile_picture : imageUrl
//   });
// }
// writeUserData("priyanshu" , "priyanshu@gmail.com");

// var database_ref = database.ref();

// Create User data
// var user_data = {
//   email : email,
//   full_name : full_name,
//   last_login : Date.now()
// }

// database_ref.child('users/' + user.uid).set(user_data);
