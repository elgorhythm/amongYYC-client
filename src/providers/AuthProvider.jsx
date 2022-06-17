import React, { useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseContext } from './FirebaseProvider';

export const AuthContext = React.createContext();

function AuthProvider(props) {
  const children = props.children;
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState();
  const [isNewUser, setIsNewUser]=useState(false)

  const fbContext = useContext(FirebaseContext);
  const auth = fbContext.auth;

  const signup = async (email, password) => {
    try {
      let userCred = await createUserWithEmailAndPassword(auth, email, password);
      if (userCred) {
        console.log('Registered!!', userCred.user);
        setAuthError(null);
        setIsNewUser(true)
        return true
      } else {
        console.log('Registration failed!');
        setAuthError("Something went wrong");
        return false
      }
    } catch (ex) {
      console.log('REG FAILURE!', ex.message);
      setAuthError(ex.message);
      return false
    }
  };

  const login = async (email, password) => {
    try {
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
        console.log('Logged in!!', userCred);
        setAuthError(null);
        
      } else {
        console.log('Login failed!');
        setAuthError('Wrong username or password');
      }
    } catch (ex) {
      console.log('AUTH FAILURE!', ex.message);
      setAuthError(ex.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged() - new User!!', user);
      setUser(user);
    });
    return unsub; // to shut down onAuthStateChanged listener
  }, [auth]);

  const theValues = { isNewUser, user, authError, login, logout, signup };
  return (
    <AuthContext.Provider value={theValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
