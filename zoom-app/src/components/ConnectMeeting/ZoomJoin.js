import React, { Component } from 'react'
import { ZoomMtg } from '@zoomus/websdk';
import axios from 'axios'

class ZoomJoin extends Component {

    constructor() {
        super();
        this.state = {
            signatureEndpoint: 'https://create-signature.herokuapp.com/',
            apiKey: '6BMrCcECRiivAmK2aK8vYg',
            meetingNumber: 9988776655,
            role: 0,
            leaveUrl: 'https://zoom.us/meetings',
            userName: 'WebSDK',
            userEmail: '',
            passWord: '55555',
            signature: '',
        }
    }

    componentDidMount() {
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        const Body = {
            "meetingNumber": 9988776655,
            "role": 0
        }
        axios.post("https://create-signature.herokuapp.com/", Body).then(response => {            
            const signature = response.data.signature;
            this.setState({
                signature: signature
            });
        })

    }

    // Zoom

    zoomInit = () => {
        const { signature, meetingNumber, userName, apiKey, userEmail, passWord, leaveUrl } = this.state        
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
                console.log(success)

                ZoomMtg.join({
                    signature: signature,
                    meetingNumber: 9988776655,
                    userName: userName,
                    apiKey: apiKey,
                    userEmail: userEmail,
                    passWord: passWord,
                    success: (success) => {
                        console.log(success)
                    },
                    error: (error) => {
                        console.log(error)
                    }
                })

            },
            error: (error) => {
                console.log(error)
            }
        })
    }

    render() {
        return (
            <div>
                {this.zoomInit()}
            </div>
        )
    }
}

export default ZoomJoin
