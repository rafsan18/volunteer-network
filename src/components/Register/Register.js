import "date-fns";
import React, { useContext, useEffect, useState } from "react";
import Headers from "../Headers/Headers";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";

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
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const classes = useStyles();
    const { eventId } = useParams();
    const history = useHistory();

    const { title, img } = event;
    const { email, name } = loggedInUser;

    useEffect(() => {
        fetch(`http://localhost:5000/event/${eventId}`)
            .then((res) => res.json())
            .then((data) => setEvent(data));
    }, [eventId]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleBlur = (e) => {
        setDescription(e.target.value);
    };

    const handleRegistration = (e) => {
        const newRegistration = {
            email,
            name,
            selectedDate,
            title,
            description,
            img,
        };

        fetch("http://localhost:5000/addChosenEvent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRegistration),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        history.push("/userSelectionPage");
        e.preventDefault();
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
                        <TextField
                            label="Full Name"
                            defaultValue={name}
                            name="fullName"
                        />
                        <br />
                        <TextField
                            defaultValue={email}
                            label="Username or Email"
                            name="email"
                        />
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
                        <TextField
                            onBlur={handleBlur}
                            label="Description"
                            name="description"
                        />
                        <br />
                        <TextField value={title} />
                        <br />
                        <button
                            onClick={handleRegistration}
                            className="btn btn-primary mt-2"
                        >
                            Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
