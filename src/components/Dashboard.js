import { Button } from "reactstrap";
import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard Page</h1>
        <p>Dear {this.props.userName}, welcome to your dashboard.</p>
        <Button onClick={this.props.handleLogout}>Logout</Button>
      </div>
    );
  }
}
export default Dashboard;
