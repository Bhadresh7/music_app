import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-SdHXy5N-GCTiPv2U3v9aP6EFUQri-io",
    authDomain: "music-app-fb6f3.firebaseapp.com",
    projectId: "music-app-fb6f3",
    storageBucket: "music-app-fb6f3.appspot.com",
    messagingSenderId: "848562415395",
    appId: "1:848562415395:web:2a9ffbc72dc8cce70d8e96"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);