import { Form, Button } from "react-bootstrap";

import React, { Component } from "react";

export class LoginForm extends Component {
  render() {
    const { onLogin } = this.props
    return (
      <div>
        <Form onSubmit={onLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        ;
      </div>
    );
  }
}

export default LoginForm;
