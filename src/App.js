import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import VolunteerList from "./components/VolunteerList/VolunteerList";
import AddEvent from "./components/AddEvent/AddEvent";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserSelection from "./components/UserSelection/UserSelection";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/registerFor/:eventId">
                        <Register />
                    </PrivateRoute>
                    <Route path="/adminPanel/volunteerList">
                        <VolunteerList />
                    </Route>
                    <PrivateRoute path="/adminPanel/addEvent">
                        <AddEvent />
                    </PrivateRoute>
                    <PrivateRoute path="/userSelectionPage">
                        <UserSelection></UserSelection>
                    </PrivateRoute>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
