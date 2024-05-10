import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALiNg_knesYwh82N31Op5gpjWnDMp8Dlw",
  authDomain: "uniexpat-69163.firebaseapp.com",
  projectId: "uniexpat-69163",
  storageBucket: "uniexpat-69163.appspot.com",
  messagingSenderId: "979483230386",
  appId: "1:979483230386:web:b6347d3da4ae1dcdcf89ab",
  measurementId: "G-DFT2FZ1LNT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
