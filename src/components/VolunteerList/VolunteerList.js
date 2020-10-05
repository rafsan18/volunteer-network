import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./VolunteerList.css";

const VolunteerList = () => {
    return (
        <div>
            <SideNavBar />
            <div className="main">
                <h4 className="mt-4">Volunteer Register List</h4>
                <div className="bg-light volunteer-list-container"></div>
            </div>
        </div>
    );
};

export default VolunteerList;
