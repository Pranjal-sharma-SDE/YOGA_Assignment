import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./Configure";
import { getStorage } from "firebase/storage";

const auth = getAuth(app);
 const signup = async({auth,email,password})=> {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};


const storage = getStorage(app);
export {auth,signup,storage};