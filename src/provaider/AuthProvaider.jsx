import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
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



  onAuthStateChanged(auth, currentUser =>{
    if(currentUser){
        console.log("currently logged user", currentUser);
        setUser(currentUser)
    }
    else{
        console.log('no user logged in');
        setUser(null)
    }
  })

  //   send object
  const authInfo = {
    user,
    createUser,
    signInUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaider;
