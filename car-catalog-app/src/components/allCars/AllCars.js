import React from "react";
import Car from "../car/Car";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllCars extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.cars.map((car, index) => {
            return (
              <Col key={index}>
                <Car car={car}  deleteCar={this.props.deleteCar} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllCars;
