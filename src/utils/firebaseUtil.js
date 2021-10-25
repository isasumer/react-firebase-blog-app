import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: "AIzaSyCvmfOevirM5wgM8_3uuAyqftlityaxGBM",
  authDomain: "milestoneproj-blog-f9323.firebaseapp.com",
  projectId: "milestoneproj-blog-f9323",
  storageBucket: "milestoneproj-blog-f9323.appspot.com",
  messagingSenderId: "658542546992",
  appId: "1:658542546992:web:df0291130fad76f7f39df5",
  databaseURL: "https://milestoneproj-blog-f9323-default-rtdb.firebaseio.com/",
});

export default firebaseUtil;
export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
