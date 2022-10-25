import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
const { v4: uuidv4 } = require("uuid");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldsEmpty: false,
      token: null,
      userName: "",
      userNotFound: false,
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");

    if (token) {
      this.setState({ token: token });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.email.value);
    // console.log(e.target.password.value);

    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;

    const credentials = {
      email: emailValue,
      password: passwordValue,
    };

    if (!emailValue && !passwordValue) {
      this.setState({ fieldsEmpty: true });
      setTimeout(() => {
        this.setState({ fieldsEmpty: false });
      }, 3000);
    } else {
      this.authenticateUsers(credentials);
    }
  };

  authenticateUsers = async (creds) => {
    const { email, password } = creds;
    const url = "https://6300279d34344b643105731e.mockapi.io/api/v1/users";

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const user = data.find((d) => d.email === email && d.password === password);
    console.log(user);

    if (user) {
      const tokenID = uuidv4();
      sessionStorage.setItem("token", tokenID);
      this.setState({ token: tokenID, userName: user.fname });
    } else {
      this.setState({ userNotFound: true });

      setTimeout(() => {
        this.setState({ userNotFound: false });
      }, 3000);
    }
  };

  handleLogout = () => {
    sessionStorage.clear();
    this.setState({ token: null });
  };
  render() {
    const { token, fieldsEmpty, userName, userNotFound } = this.state;

    const loginProps = {
      handleFormSubmit: this.handleSubmit,
      fieldsEmpty,
      userNotFound,
    };

    const dashBoardProps = {
      userName,
      handleLogout: this.handleLogout,
    };
    return (
      <div className="App">
        <h1>Login-logout</h1>
        {token ? <Dashboard {...dashBoardProps} /> : <Login {...loginProps} />}
      </div>
    );
  }
}

export default App;
