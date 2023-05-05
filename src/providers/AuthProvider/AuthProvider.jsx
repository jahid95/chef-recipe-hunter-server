import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
} from "firebase/auth";

import { useEffect } from 'react';
import { useState } from 'react';
import app from '../../../firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      };
    
      const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        handleGithubLogin,
        handleGoogleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;