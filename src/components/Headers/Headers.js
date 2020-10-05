import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const Headers = () => {
    const history = useHistory();
    const location = useLocation();

    const handleRegister = () => {
        history.push("/login");
    };

    console.log(location);
    return (
        <>
            {location.pathname === "/login" ? (
                <img
                    src={logo}
                    style={{
                        width: "200px",
                        display: "block",
                        margin: "0px auto",
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
                            <Nav.Link href="#link">Donations</Nav.Link>
                            <Nav.Link href="#link">Events</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button
                                className="mr-1 btn-primary text-light"
                                variant="outline-success"
                                onClick={handleRegister}
                            >
                                Register
                            </Button>
                            <Button
                                className=" btn-dark text-light"
                                variant="outline-success"
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
