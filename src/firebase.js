import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSah_ZVG-wWxBoi41iNinCu7-xvupnUlI",
  authDomain: "file-upload-671ec.firebaseapp.com",
  projectId: "file-upload-671ec",
  storageBucket: "file-upload-671ec.appspot.com",
  messagingSenderId: "217088468218",
  appId: "1:217088468218:web:9b24036286c3a3d7975543",
  measurementId: "G-3D6KQNTY06",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
