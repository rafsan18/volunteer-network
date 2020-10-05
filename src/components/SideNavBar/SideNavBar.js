import React, { useState } from "react";
import logo from "../../images/logos/logo.png";
import "./SideNavBar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const SideNavBar = () => {
    const location = useLocation();

    return (
        <div className="sidenav">
            <img className="img-fluid w-75 ml-3" src={logo} alt="" />
            <div className="link-container">
                <Link
                    className={
                        location.pathname === "/adminPanel/volunteerList"
                            ? "sidenav-link text-primary"
                            : "sidenav-link"
                    }
                    to="/adminPanel/volunteerList"
                >
                    <FontAwesomeIcon icon={faUser} /> &nbsp; Volunteer Register
                    list
                </Link>
                <Link
                    className={
                        location.pathname === "/adminPanel/addEvent"
                            ? "sidenav-link text-primary"
                            : "sidenav-link"
                    }
                    to="/adminPanel/addEvent"
                >
                    <FontAwesomeIcon icon={faPlus} /> &nbsp; Add Event
                </Link>
            </div>
        </div>
    );
};

export default SideNavBar;
