import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvaider = new GoogleAuthProvider()

const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


  // for register
  const createUser = (email, passwod) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passwod);
  };

  //   for login
  const signInUser = (email, passwod) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, passwod);
  };

  // login with google popup
  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvaider)
  }

  // for logout
  const singOutUser = () => {
    setLoading(true)
    return signOut(auth);

  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return () =>{
      unsubscribe();
    }
  },[])

  //   send object
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    singOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
