import React, { Component } from "react";
import axios from "axios";

export default class SubCounter extends Component {
    constructor() {
        super();
        this.state = {
            channel_stats: {},
            error: ""
        };
    }

    componentDidMount() {
        // Get initial count number
        axios({
            method: "get",
            url: "https://www.googleapis.com/youtube/v3/channels",
            params: {
                key: "AIzaSyAcX2XGaPYMrZe5PbWaSlA-KXiVGqrkEpg",
                part: "statistics",
                // Should make id load dynamically based on channel search
                id: "UCJwnN8Kmor1p97kEY_j4OLg"
            }
        })
            .then(res => {
                console.log(res); // Success, but need to render result
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div></div>;
    }
}
