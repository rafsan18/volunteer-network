import React from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./AddEvent.css";

const AddEvent = () => {
    return (
        <div>
            <SideNavBar />
            <div className="main">
                <h4 className="mt-4">Add Event</h4>
                <div className="bg-light add-event-container"></div>
            </div>
        </div>
    );
};

export default AddEvent;
