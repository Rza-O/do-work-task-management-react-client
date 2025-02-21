import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();
   const handleGoogleLogin = async () => {
      try {
         const result = await signInWithPopup(auth, googleProvider);
         const loggedInUser = result.user;

         const userData = {
            email: loggedInUser.email,
            displayName: loggedInUser.displayName
         };

         // Send user details to the backend
         await axios.post(`${import.meta.env.VITE_server_link}/users`, userData);

         setUser(loggedInUser);
      } catch (error) {
         console.error("Google Sign-In Error:", error);
      }
   };


   const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
   }

   const handleLogOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      })

      return () => {
         unsubscribe();
      }
   }, []);

   const authInfo = {
      handleGoogleLogin,
      user,
      setUser,
      updateUserProfile,
      handleLogOut,
      loading,
      setLoading
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;