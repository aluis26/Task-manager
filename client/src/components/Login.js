import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          results: {},
          inputEmail: '',
          inputPassword: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    };

    handleChangeEmail(event) {
        this.setState({inputEmail: event.target.value})
        console.log('email-', event.target.value)
    }
    handleChangePassword(event) {
        this.setState({inputPassword: event.target.value})
        console.log('password-', event.target.value)
    }


    render() {
        return (
            <div className="login-container">
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={event => this.handleChangeEmail(event)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={event => this.handleChangePassword(event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
            </div>
        )
    }
}

