
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBCyCjlHwzDvvSt-KR2O7IEGPlZtDo-ik",
  authDomain: "albertk-translator.firebaseapp.com",
  projectId: "albertk-translator",
  storageBucket: "albertk-translator.appspot.com",
  messagingSenderId: "1074901492992",
  appId: "1:1074901492992:web:665d6640990d7e480f3fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbPersist = initializeFirestore(app,
  {
      localCache:
      persistentLocalCache(/*settings*/{tabManager: persistentMultipleTabManager()})
})


export default app