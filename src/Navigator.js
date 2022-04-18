import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppContainer from "./screens/app/AppContainer";
import DashboardContainer from "./screens/dashboard/DashboardContainer";
import SessionViewerContainer from "./screens/sessionviewer/SessionViewerContainer";

const Navigator = ({ }) => {
    return (
        <Switch>
            <Route exact path="/">
                <AppContainer />
            </Route>
            <Route path="/dashboard">
                <DashboardContainer />
            </Route>
            <Route path="/session/:sessionhash/:id">
                <SessionViewerContainer />
            </Route>
            <Route path="/session/:sessionhash">
                <SessionViewerContainer />
            </Route>
        </Switch>
    )
}

export default Navigator