import React, { useEffect, useState } from "react";
import ChosenEvent from "../ChosenEvent/ChosenEvent";
import Headers from "../Headers/Headers";

const UserSelection = () => {
    const [chosenEvents, setChosenEvent] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chosenEvent")
            .then((res) => res.json())
            .then((data) => setChosenEvent(data));
    }, []);

    return (
        <div className="bg-light vh-100 container-fluid">
            <Headers></Headers>
            <div className="row justify-content-center align-items-center mt-4">
                {chosenEvents.map((ev) => (
                    <ChosenEvent key={ev._id} ev={ev}></ChosenEvent>
                ))}
            </div>
        </div>
    );
};

export default UserSelection;
