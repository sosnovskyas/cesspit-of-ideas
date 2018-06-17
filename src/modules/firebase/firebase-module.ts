import * as Firebase from "firebase";

// Initialize Firebase
export const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyClYKanCdFYyHz71ypptEJjusM6E9NwjJ4",
  authDomain: "cesspit-of-ideas-8b6e2.firebaseapp.com",
  databaseURL: "https://cesspit-of-ideas-8b6e2.firebaseio.com",
  projectId: "cesspit-of-ideas-8b6e2",
  storageBucket: "cesspit-of-ideas-8b6e2.appspot.com",
  messagingSenderId: "860237646394"
});

export const firebaseDb: Firebase.database.Database = firebaseApp.database();

Firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    // store.dispatch(firebaseUserAuth(user));
  } else {
    // User is signed out.
    // store.dispatch(firebaseUserUnAuth());
  }
});
Firebase.auth()
  .signInAnonymously()
  .catch(function(error) {
    console.log("signInAnonymously", error);
  });

export const dbConnectedRef = firebaseDb.ref(".info/connected");

dbConnectedRef.on(
  "value",
  snapshot => {
    // const isConnected: Action = snapshot.val()
    //   ? firebaseConnected()
    //   : firebaseDisonnected();
    // store.dispatch(isConnected);
  },
  this
);
