
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDg2WUVZVWIlZQfyYYYBKe49v9MlMDjBQQ",
    authDomain: "blog-32e1d.firebaseapp.com",
    projectId: "blog-32e1d",
    storageBucket: "blog-32e1d.appspot.com",
    messagingSenderId: "289114682612",
    appId: "1:289114682612:web:47437ba614b76693395aa1",
    measurementId: "G-SZGVJEVBZJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}