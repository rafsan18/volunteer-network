import "date-fns";
import React, { useState } from "react";
import Headers from "../Headers/Headers";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(0.5),
            width: "80%",
        },
    },
    formContainer: {
        width: "500px",
        margin: "40px 0 20px 70px",
    },
}));

const Register = () => {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="bg-light container-fluid" style={{ height: "100vh" }}>
            <Headers></Headers>
            <div
                style={{
                    maxWidth: "570px",
                    height: "460px",
                    backgroundColor: "#fff",
                    border: "1px solid lightgrey",
                    margin: " 0 auto",
                    marginTop: "20px",

                    borderRadius: "5px",
                }}
            >
                <div className={classes.formContainer}>
                    <h4>Register as volunteer</h4>
                    <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Full Name" name="fullName" />
                        <br />
                        <TextField label="Username or Email" name="email" />
                        <br />

                        <TextField label="Standard" name="title" />
                        <br />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                label="Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date",
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <br />

                        <TextField label="Name of volunteering service" />
                        <br />
                        <input
                            className=" btn btn-primary mt-2"
                            type="submit"
                            value="Registration"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
