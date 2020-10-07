import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import ChosenEvent from "../ChosenEvent/ChosenEvent";
import Headers from "../Headers/Headers";

const UserSelection = () => {
    const [chosenEvents, setChosenEvent] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(
            "https://vast-waters-03225.herokuapp.com/chosenEvent?email=" +
                loggedInUser.email,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setChosenEvent(data));
    }, []);

    return (
        <div className="bg-light vh-100 container-fluid">
            <Headers></Headers>
            <div className=" row ">
                {chosenEvents.map((ev) => (
                    <ChosenEvent key={ev._id} ev={ev}></ChosenEvent>
                ))}
            </div>
        </div>
    );
};

export default UserSelection;
