import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Interviews from "./interviews/interviews";

class Main extends Component {
    render() {
        return  (
            <HashRouter>
                <div>
                    <h1>Interview Schedules</h1>

                    <ul className = "header">
                        <li><NavLink to = "/">HOME</NavLink></li>
                        <li><NavLink to = "/interviews">Interviews</NavLink></li>
                        <li><NavLink to = "/uses">Users</NavLink></li>
                    </ul>

                    <div className = "content">
                        <switch>
                            <Route path = "/interviews" component = {Interviews} />
                            <Route exact path = "/" component = {Home} />
                        </switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;