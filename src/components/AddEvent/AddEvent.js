import React, { useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./AddEvent.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            width: "25ch",
            margin: "20px 20px 20px 60px",
        },
    },
    button: {
        color: "#0084FF",
        backgroundColor: "#E5F3FF",
        border: "1px solid #0084FF",
    },
    submitBtn: {
        marginLeft: "65%",
    },
}));

const AddEvent = () => {
    const classes = useStyles();
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [event, setEvent] = useState({});
    const history = useHistory();

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleBlur = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        if (e.target.name === "description") {
            setDescription(e.target.value);
        }
    };

    const handleAddEvent = () => {
        const newEvent = {
            title,
            description,
            date,
        };
        fetch("http://localhost:5000/addEvents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
            .then((res) => res.json())
            .then((data) => {});

        history.push("/home");
    };

    return (
        <div>
            <SideNavBar />
            <div className="main">
                <h4 className="mt-4">Add Event</h4>
                <div className="bg-light add-event-container">
                    <div className="bg-white form-container w-75">
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                onBlur={handleBlur}
                                name="title"
                                label="Title"
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    label="Date"
                                    value={date}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <br />

                            <TextField
                                onBlur={handleBlur}
                                name="description"
                                label="Description"
                                multiline
                                variant="outlined"
                            />

                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                        </form>
                    </div>
                    <Button
                        onClick={handleAddEvent}
                        variant="contained"
                        color="primary"
                        className={classes.submitBtn}
                    >
                        submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;
