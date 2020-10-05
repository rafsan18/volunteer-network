import React from "react";
import Headers from "../Headers/Headers";
import googleLogo from "../../images/logos/google.svg";
import "./Login.css";

const Login = () => {
    return (
        <div className="bg-light container-fluid" style={{ height: "100vh" }}>
            <Headers></Headers>
            <div
                style={{
                    maxWidth: "570px",
                    height: "460px",
                    backgroundColor: "#fff",
                    border: "1px solid lightgrey",
                    margin: " 0 auto",
                }}
                className="d-flex flex-column justify-content-center align-items-center mt-5"
            >
                <h4>Login with</h4>
                <button className="btn btn-light">
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
