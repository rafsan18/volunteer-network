import React, { useContext } from "react";
import Headers from "../Headers/Headers";
import googleLogo from "../../images/logos/google.svg";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email,
                    isSignedIn: true,
                };
                setLoggedInUser(signedInUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });
    };

    return (
        <div className="bg-light container-fluid" style={{ height: "100vh" }}>
            <Headers></Headers>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 login-container">
                <h4>Login with</h4>
                <button className="btn btn-light" onClick={googleSignIn}>
                    <img src={googleLogo} alt="" /> Continue with google
                </button>
                <p>
                    Don't have an account? &nbsp;
                    <span className="text-primary toggle-field">
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
