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
        axios({
            method: "get",
            url: "https://www.googleapis.com/youtube/v3/channels",
            params: {
                key: "AIzaSyAcX2XGaPYMrZe5PbWaSlA-KXiVGqrkEpg",
                part: statistics,
                id: "UCJwnN8Kmor1p97kEY_j4OLg"
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div></div>;
    }
}
