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
        axios
            .get("http://localhost:4000/api/subs/")
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
