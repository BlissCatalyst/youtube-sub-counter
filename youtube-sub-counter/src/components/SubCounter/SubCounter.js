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
        let subCount = Number(this.state.channel_stats.subscriberCount);
        if (subCount < 1000) {
            return `${subCount}`;
        } else if (subCount >= 1000 && subCount < 1000000) {
            return `${subCount.toExponential().slice(-3)} K`;
        } else {
            return `${subCount.toExponential()} M`;
        }
    };

    componentDidMount() {
        this.refreshSubs();
    }

    render() {
        // setInterval(this.refreshSubs, 15000);

        return (
            <section className="subscribers">
                <h1>Youtube Subscribers:</h1>
                <h2>
                    {numeral(this.state.channel_stats.subscriberCount)
                        .format("0.0a")
                        .toUpperCase()}
                </h2>
            </section>
        );
    }
}
