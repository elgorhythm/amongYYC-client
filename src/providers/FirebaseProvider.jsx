import React, { createContext } from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeA3tfGHGIYKaXtNQ64UH0K-ZGqKeUsHs",
  authDomain: "amongyyc-ebf99.firebaseapp.com",
  projectId: "amongyyc-ebf99",
  storageBucket: "amongyyc-ebf99.appspot.com",
  messagingSenderId: "983376128809",
  appId: "1:983376128809:web:81900b03b478fd9577e538",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const FirebaseContext = createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app, auth, db };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
