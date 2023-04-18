import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqKJt31zWCV18WMQ603Jgkq7LZhQ4E0UE",
    authDomain: "multispace-96f16.firebaseapp.com",
    projectId: "multispace-96f16",
    storageBucket: "multispace-96f16.appspot.com",
    messagingSenderId: "805220417399",
    appId: "1:805220417399:web:60fe352bc61d6e6dbb6b72"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);