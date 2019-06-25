import React from 'react';
import PropTypes from 'prop-types';

import {
    FormInput,
    Form,
    FormGroup,
    Card,
    CardBody,
    Button,
    CardFooter,
    CardHeader,
} from "shards-react";

export class JoinOrCreateRoomScreenComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            roomname: props.roomname
        }
    }

    render() {
        return (
            <div className="login-screen-container overlay">
                <Card className="login-card">
                    <CardHeader className="login-card-header">
                        Welcome to campfire!
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup className="login-form-group">
                                <label htmlFor="username" className="login-label">Username</label>
                                <FormInput autocomplete="off" id="username" className="input" />
                            </FormGroup>
                            <FormGroup className="login-form-group">
                                <label htmlFor="roomname" className="login-label">Room Name</label>
                                <FormInput autocomplete="off" id="roomname" className="input"/>
                            </FormGroup>
                            <CardFooter className="login-card-footer">
                                <Button className="login-button" outline>
                                    Log in
                                </Button>
                            </CardFooter>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    };
};

JoinOrCreateRoomScreenComponent.propTypes = {
    username: PropTypes.string,
    roomname: PropTypes.string
};