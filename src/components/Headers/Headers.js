import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logos/logo.png";

const Headers = () => {
    return (
        <div className="container-fluid">
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
        </div>
    );
};

export default Headers;
