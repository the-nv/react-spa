import React, { Component } from "react";

class Main extends Component {
    render() {
        return  (
            <div>
                <h1>Interview Schedules</h1>

                <ul className = "header">
                    <li><a href = "/">HOME</a></li>
                    <li><a href = "/interviews">Interviews</a></li>
                    <li><a href = "/uses">Users</a></li>
                </ul>

                <div className = "content">


                </div>
            </div>
        );
    }
}

export default Main;