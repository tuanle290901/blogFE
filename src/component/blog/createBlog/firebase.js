import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDg2WUVZVWIlZQfyYYYBKe49v9MlMDjBQQ",
    authDomain: "blog-32e1d.firebaseapp.com",
    projectId: "blog-32e1d",
    storageBucket: "blog-32e1d.appspot.com",
    messagingSenderId: "289114682612",
    appId: "1:289114682612:web:47437ba614b76693395aa1",
    measurementId: "G-SZGVJEVBZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)

