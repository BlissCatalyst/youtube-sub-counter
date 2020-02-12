import React, { Component } from "react";
import axios from "axios";
import numeral from "numeral";

export default class SubCounter extends Component {
    constructor() {
        super();
        this.state = {
            channel_stats: {},
            error: ""
        };
    }

    refreshSubs = () => {
        // Get initial count number
        axios
            .get("http://localhost:4000/api/subs/")
            .then(res => {
                // statistics: { viewCount: char, commentCount: char, subcriberCount: char, hiddenSubscriberCount: bool, videoCount: char }
                this.setState({ channel_stats: res.data.items[0].statistics });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    };

    subAbbreviator = () => {
        let subCount = numeral(this.state.channel_stats.subscriberCount)
            .format("0.0a")
            .toUpperCase();

        return subCount.replace(".0", "");
        // console.log(subCount.endsWith(".0"));
    };

    componentDidMount() {
        this.refreshSubs();
    }

    render() {
        // setInterval(this.refreshSubs, 15000);

        return (
            <section className="subscribers">
                <h1>Youtube Subscribers:</h1>
                <h2>{this.subAbbreviator()}</h2>
            </section>
        );
    }
}
