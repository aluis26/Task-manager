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
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({ inputEmail: event.target.value, inputPassword: event.target.value})
        console.log(event.target.value)
    }


    render() {
        return (
            <div className="login-container">
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={event => this.handleChange(event)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={event => this.handleChange( event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
            </div>
        )
    }
}

