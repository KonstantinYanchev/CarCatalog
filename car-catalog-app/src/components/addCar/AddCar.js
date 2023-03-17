import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddCar.css";

class AddCar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.random(),
      model: "",
      horsePower: 0,
      color: "",
      fuelType: "",
      engine: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter model"
              name="model"
              value={this.state.model}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Horse power</Form.Label>
            <Form.Control
              type="text"
              name="horsePower"
              placeholder="Enter horse power"
              value={this.state.horsePower}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              placeholder="Enter color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fuel type</Form.Label>
            <Form.Control
              type="text"
              name="fuelType"
              placeholder="Enter fuel type"
              value={this.state.fuelType}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Engine</Form.Label>
            <Form.Control
              type="text"
              name="engine"
              placeholder="Enter engine"
              value={this.state.engine}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              this.props.addCar(this.state);
            }}
          >
            Add car
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddCar;
