import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./Login.css";

class Login extends Component {
  render() {
    const { handleFormSubmit, fieldsEmpty, userNotFound } = this.props;
    return (
      <div className="login">
        <h2 style={{ textAlign: "center" }}>Login Page</h2>
        {fieldsEmpty ? (
          <div className="error">Please Fill in All Required Fields </div>
        ) : null}
        {userNotFound ? <div className="error">User is Not Found</div> : null}

        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
          </FormGroup>{" "}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default Login;
