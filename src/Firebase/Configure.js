import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5GAeVwlHJNexiqHqlq6SAFPkzZAx5ahE",
    authDomain: "yoga-classes-62c00.firebaseapp.com",
    projectId: "yoga-classes-62c00",
    storageBucket: "yoga-classes-62c00.appspot.com",
    messagingSenderId: "466410940331",
   
  };
  const app = initializeApp(firebaseConfig);
  console.log("APi kry:",process.env.REACT_APP_API_KEY);

 
  console.log(app.options)
  export default app;

