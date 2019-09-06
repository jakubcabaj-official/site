import React from "react"
import './clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
            1000
            );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-date">{this.state.date.toLocaleDateString()}</div>
                <div className="clock-time">{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    }
}

export default Clock;