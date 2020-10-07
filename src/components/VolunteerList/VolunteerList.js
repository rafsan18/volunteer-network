import React, { useEffect, useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import ListTable from "./ListTable";
import "./VolunteerList.css";

const VolunteerList = () => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        fetch("https://vast-waters-03225.herokuapp.com/adminPanel")
            .then((res) => res.json())
            .then((data) => {
                setEventList(data);
            });
    }, []);

    return (
        <div>
            <SideNavBar />
            <div className="main">
                <h4 className="mt-4">Volunteer Register List</h4>
                <div className="bg-light volunteer-list-container">
                    <table>
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registration Date</th>
                                <th>Event title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventList.map((event) => (
                                <ListTable
                                    key={event._id}
                                    event={event}
                                ></ListTable>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerList;
