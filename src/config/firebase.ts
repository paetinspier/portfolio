import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
let firebaseCredentials: any;
if (process.env.VERCEL_ENV) {
	if (process.env.VERCEL_ENV === "production") {
        firebaseCredentials = {
            apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        };
	}
} else {
	firebaseCredentials = {
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
		authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	};
}

const app = initializeApp(firebaseCredentials);
export const auth = getAuth();
export const firestore = getFirestore(app);

const storage = getStorage(app);
export default storage;
