import React, {createContext, useContext} from 'react'; 
import{ initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const FireBaseContext =createContext();
export const useFirebase =()=> useContext(FireBaseContext);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNw-FdJjWgYRttcpj2P-P1KEWpqgxqMus",
  authDomain: "c10-cyo-firebase-web-app.firebaseapp.com",
  projectId: "c10-cyo-firebase-web-app",
  storageBucket: "c10-cyo-firebase-web-app.appspot.com",
  messagingSenderId: "289747174039",
  appId: "1:289747174039:web:4abc353db866ebc4151fd2",
  measurementId: "G-SVSF07ZJWE",
};

// Initialize Firebase

const FirebaseProvider = (props) => {
  const children =props.children;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  const theValues ={app, auth, db};
return (
  <FireBaseContext.Provider value={theValues}>
    {children}
  </FireBaseContext.Provider>
)
}

export default FirebaseProvider