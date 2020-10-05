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
}));

const AddEvent = () => {
    const classes = useStyles();
    const [addDate, setAddDate] = useState(new Date());

    const handleDateChange = (date) => {
        setAddDate(date);
    };

    return (
        <div>
            <SideNavBar />
            <div className="main">
                <h4 className="mt-4">Add Event</h4>
                <div className="bg-light add-event-container">
                    <div className="bg-white form-container">
                        <form
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="Title" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    label="Date"
                                    value={addDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <br />

                            <TextField
                                id="outlined-multiline-static"
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
                </div>
            </div>
        </div>
    );
};

export default AddEvent;
