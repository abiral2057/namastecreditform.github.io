//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// import {getDatabase, ref, set, onValue, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"; //important to be considers

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyBs82S-a8B_n2nvE58-eSJaBEZS_hOqpQw",
//     authDomain: "formproject-97909.firebaseapp.com",
//     projectId: "formproject-97909",
//     storageBucket: "formproject-97909.appspot.com",
//     messagingSenderId: "1022928071280",
//     appId: "1:1022928071280:web:424997b8216d1a093562b5",
//     measurementId: "G-B1KN9Z1612"
//   };
//   const app = initializeApp(firebaseConfig);
//         const database = getDatabase(app);
  

//         submit.addEventListener('click', (e) => {

//             var name = document.getElementById('custname').value;
//             var number = document.getElementById('custnumber').value;
//             var credit = document.getElementById('custamt').value;
//             var location = document.getElementById('custadd').value;
//             set(ref(database, 'form/' + name), {
//                 name: name,
//                 number: number,
//                 credit: credit,
//                 location:location
//             }).then(() => {
//                 // Data saved successfully!
//                 alert('data submitted');
//             })
//                 .catch((error) => {
//                     // The write failed...
//                     alert(error);
//                 });
            
//         });