import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Car.css";

class Car extends Component {
  render() {
    return (
      <Card style={{ width: "13rem" }}>
        <Card.Body>
          <Card.Title>Model: {this.props.car.model}</Card.Title>
          <Card.Text>
            <span>Horse power: {this.props.car.horsePower}</span> <br />
            <span>Color: {this.props.car.color}</span> <br />
            <span>Engine: {this.props.car.engine}</span> <br />
            <span>Fuel type: {this.props.car.fuelType}</span>
          </Card.Text>
          <Button variant="primary">
            <Link className="editButton" to={`/edit/${this.props.car.id}`}>Edit</Link>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="warning"
            onClick={() => this.props.deleteCar(this.props.car)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Car;
