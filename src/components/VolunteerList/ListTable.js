import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ListTable = (props) => {
    const { email, name, selectedDate, title, _id } = props.event;
    const registrationDate = new Date(selectedDate).toDateString("dd/MM/yyyy");
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDeleteBtn = (id) => {
        fetch(`http://localhost:5000/deleteEvent/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                setIsDeleted(result);
            });
    };
    return (
        <tr className={isDeleted ? "d-none" : ""}>
            <td>{name}</td>
            <td> {email} </td>
            <td>{registrationDate}</td>
            <td>{title}</td>
            <td>
                <button onClick={() => handleDeleteBtn(_id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    );
};

export default ListTable;
