import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class ConnectMeeting extends Component {

    constructor() {
        super();
        this.state = {
            showZoom: false,
        }
    }
    handleJoin = () => {
        this.setState({
            showZoom: true
        })
    }


    render() {
        const { showZoom } = this.state;

        if (this.state.showZoom) {
            return <Redirect to='/zoom' />;
        }
        else
            return (<div ><a onClick={this.handleJoin} className='click-button'>Join Meeting</a></div>)

    }
}

export default ConnectMeeting
