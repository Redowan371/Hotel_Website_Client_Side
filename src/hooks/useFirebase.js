import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

const logOut =()=>{
    signOut(auth).then(() => {
       setUser({})
      }).catch((error) => {
        
      });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } 
  });


    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;