import React from "react";
import { Card } from "react-bootstrap";

const Events = (props) => {
    const { title, img } = props.event;
    const colorString = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];

    return (
        <div className="col-md-3 col-sm-6 mt-4">
            <Card
                style={{
                    height: "320px",
                    border: "none",
                    backgroundColor: colorString[Math.round(Math.random() * 3)],
                    color: "#fff",
                    borderRadius: "10px",
                }}
            >
                <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={img}
                    style={{ height: "240px" }}
                />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Events;
