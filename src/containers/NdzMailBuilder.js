import React, { Component } from 'react';
import axios from 'axios';
import MailHeader from '../components/MailHeader';
import MailBody from '../components/MailBody';

import { connect } from 'react-redux'

import { setUserDetails, setMessageDetails } from '../redux/actions/user-actions'

class NdzMailBuilder extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     username: '',
        //     menu: [],
        //     messageDetails: []
        // }
        this.props.userDetails();
        this.props.fetchMessageDetails();

    }

    // setUserDetails = () => {
    //     axios.get('http://www.mocky.io/v2/5e9fe82f2d00002900cb7dd1').then(resp => {
    //         this.setState({ username: resp.data.displayName })
    //     });
    //     axios.get('http://www.mocky.io/v2/5ea0092e2d00005300cb7f68').then(resp => {
    //         this.setState({ menu: resp.data })
    //     });
    // }


    setMessageSection = (menuItem) => {
        if (menuItem === 'inbox') {
            this.props.fetchMessageDetails();
        } else {
            alert("API Not Yet Ready")
        }
    }

    render() {
        return (
            <>
                {/* {this.props.userDetails} */}
                <MailHeader user={this.props.username} />
                <hr></hr>
                <MailBody menuList={this.props.menu} clicked={this.setMessageSection} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.username,
    menu: state.menu,
    messageDetails: state.messageDetails

})

const setDispatchToProps = (dispatch) => ({
    userDetails: () => dispatch(setUserDetails()),
    fetchMessageDetails: () => dispatch(setMessageDetails())
})

export default connect(mapStateToProps, setDispatchToProps)(NdzMailBuilder)