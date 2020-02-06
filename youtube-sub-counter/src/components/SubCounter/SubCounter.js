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

    componentDidMount() {
        this.refreshSubs();
    }

    render() {
        setInterval(this.refreshSubs, 5000);

        return (
            <div>
                <h1>Current Youtube Subscriber Count</h1>
                <h2>{this.state.channel_stats.subscriberCount}</h2>
            </div>
        );
    }
}
