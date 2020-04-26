import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Messages from "../components/Messages";

class MessageContainer extends Component {

    render() {
        let { message } = this.props
        return (
            <Messages message={message} />
        )
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStatetoProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStatetoProps, null)(MessageContainer)