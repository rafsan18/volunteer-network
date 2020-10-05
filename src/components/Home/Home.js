import React, { useEffect, useState } from "react";
import Events from "../Events/Events";
import Headers from "../Headers/Headers";

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    return (
        <div className="container ">
            <Headers></Headers>
            <div className="row mt-5">
                {events.map((event) => (
                    <Events key={event._id} event={event}></Events>
                ))}
            </div>
        </div>
    );
};

export default Home;
