import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListTable = (props) => {
    const { email, name, selectedDate, title, _id } = props.event;
    const registrationDate = new Date(selectedDate).toDateString("dd/MM/yyyy");

    const handleDeleteBtn = () => {
        console.log("clicked");
    };
    return (
        <tr>
            <td>{name}</td>
            <td> {email} </td>
            <td>{registrationDate}</td>
            <td>{title}</td>
            <td>
                <button onClick={() => handleDeleteBtn()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    );
};

export default ListTable;
