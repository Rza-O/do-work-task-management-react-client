import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();
   const handleGoogleLogin = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
   }

   const handleRegister = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const handleLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   }

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
      handleRegister,
      handleLogin,
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