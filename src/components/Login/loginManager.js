import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch((error) => {
            return error.message;
        });
};

export const signOutFromAccount = () => {
    return firebase
        .auth()
        .signOut()
        .then((res) => {
            const signedOutUser = {
                isSignedIn: false,
                name: "",
                email: "",
            };
            return signedOutUser;
        })
        .catch((error) => {});
};
