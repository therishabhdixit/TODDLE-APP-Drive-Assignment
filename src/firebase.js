import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBkI_CNY0I5EsXmBOgqPLYQpiWGo-lYPIA",
  authDomain: "drive-clone-eaff2.firebaseapp.com",
  projectId: "drive-clone-eaff2",
  storageBucket: "drive-clone-eaff2.appspot.com",
  messagingSenderId: "912805154890",
  appId: "1:912805154890:web:85daed54751754812316b3",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
