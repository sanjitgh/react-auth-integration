import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvaider = ({ children }) => {

    const [user, setUser] = useState(null);


  // for register
  const createUser = (email, passwod) => {
    return createUserWithEmailAndPassword(auth, email, passwod);
  };

  //   for login
  const signInUser = (email, passwod) => {
    return signInWithEmailAndPassword(auth, email, passwod);
  };

  // for logout
  const singOutUser = () => {
    return signOut(auth);

  }


  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
    })
    return () =>{
      unsubscribe();
    }
  },[])

  //   send object
  const authInfo = {
    user,
    createUser,
    signInUser,
    singOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
