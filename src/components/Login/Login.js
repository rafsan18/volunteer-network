import React, { useContext } from "react";
import Headers from "../Headers/Headers";
import googleLogo from "../../images/logos/google.svg";
import "./Login.css";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
    authToken,
    handleGoogleSignIn,
    initializeLoginFramework,
} from "./loginManager";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            setLoggedInUser(res);
            storeAuthToken();
            history.replace(from);
        });
    };

    const storeAuthToken = () => {
        authToken().then((res) => {
            sessionStorage.setItem("token", res);
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
