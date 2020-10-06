import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";

const PrivateRoute = () => {
      return (
      //     <Route
      //         {...rest}
      //         render={({ location }) =>
      //             fakeAuth.isAuthenticated ? (
      //                 children
      //             ) : (
      //                 <Redirect
      //                     to={{
      //                         pathname: "/login",
      //                         state: { from: location },
      //                     }}
      //                 />
      //             )
      //         }
      //     />
      );
};

export default PrivateRoute;