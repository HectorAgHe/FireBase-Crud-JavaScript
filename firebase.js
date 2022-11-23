  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCBFbt3DyXcNc48bAMaI1qtU0kgTx1nPvU",
    authDomain: "fir-javascript-crud-d3617.firebaseapp.com",
    projectId: "fir-javascript-crud-d3617",
    storageBucket: "fir-javascript-crud-d3617.appspot.com",
    messagingSenderId: "383880425774",
    appId: "1:383880425774:web:bcc1726ec22e8d36864abf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

 export const saveTask = (title, description) => 
    addDoc(collection(db, 'tasks'), {title, description});

  