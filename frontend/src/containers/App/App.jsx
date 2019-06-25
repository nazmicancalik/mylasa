import React from 'react';
import PropTypes from 'prop-types';

import { JoinOrCreateRoomScreen } from '../JoinOrCreateRoomScreen';

import {
    Container
} from "shards-react";

export class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    render() {
        return (
            <div className="application">
                {this.state.isLoggedIn ? (<div> Logged in</div>) : (<JoinOrCreateRoomScreen />)}
            </div>
        );
    };
};

AppComponent.propTypes = {
    isLoggedIn: PropTypes.bool
};