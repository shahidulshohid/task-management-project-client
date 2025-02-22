// // I have teken this keys from assignment 12 of firebase
// // ===========================================================

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
//  export default app


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDBY1_RnN7a31qIPY_hmDFc2yHg-CIno",
  authDomain: "solosphere-templete.firebaseapp.com",
  projectId: "solosphere-templete",
  storageBucket: "solosphere-templete.firebasestorage.app",
  messagingSenderId: "470495418028",
  appId: "1:470495418028:web:dacc2d074345c7e4b8b109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app