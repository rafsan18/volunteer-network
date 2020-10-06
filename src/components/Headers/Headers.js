import React, { useContext } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import { signOutFromAccount } from "../Login/loginManager";

const Headers = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { isSignedIn, name } = loggedInUser;

    const handleSignOut = () => {
        signOutFromAccount().then((res) => {
            setLoggedInUser(res);
        });
    };

    const handleRegister = () => {
        history.push("/login");
    };

    const handleAdminPanel = () => {
        history.push("/adminPanel/volunteerList");
    };

    return (
        <>
            {location.pathname === "/login" ||
            location.pathname === "/register" ? (
                <img
                    src={logo}
                    style={{
                        width: "200px",
                        display: "block",
                        margin: "0px auto",
                        paddingTop: "30px",
                    }}
                    alt=""
                />
            ) : (
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo} className="img-fluid w-25" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            {isSignedIn ? (
                                <Nav.Link href="#link">
                                    <strong>{name}</strong>
                                </Nav.Link>
                            ) : null}
                        </Nav>
                        <Form inline>
                            {isSignedIn ? (
                                <Button
                                    className="mr-1 btn-primary text-light"
                                    variant="outline-success"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </Button>
                            ) : (
                                <Button
                                    className="mr-1 btn-primary text-light"
                                    variant="outline-success"
                                    onClick={handleRegister}
                                >
                                    Register
                                </Button>
                            )}

                            <Button
                                className=" btn-dark text-light"
                                variant="outline-success"
                                onClick={handleAdminPanel}
                            >
                                Admin
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            )}
        </>
    );
};

export default Headers;
