import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppContainer from "./screens/app/AppContainer";
import DashboardContainer from "./screens/dashboard/DashboardContainer";

const Navigator = ({ }) => {
    return (
        <Switch>
            <Route exact path="/">
                <AppContainer />
            </Route>
            <Route path="/dashboard">
                <DashboardContainer />
            </Route>
        </Switch>
    )
}

export default Navigator