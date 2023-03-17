import React from "react";
import { Switch, Route, BrowserRouter, useHistory, re } from "react-router-dom";

import Header from "./components/header/Header";
import AllCars from "./components/allCars/AllCars";
import AddCar from "./components/addCar/AddCar";
import EditCar from "./components/editCar/EditCar";
import { getCars } from "./services/CarService";
import { getIndex } from "./helpers/Utility";

import "./CarCatalogApp.css";

class CarCatalogApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCars: [],
    };
  }

  componentDidMount() {
    let cars = getCars();

    this.setState({ allCars: cars });
  }

  addCar = (car) => {
    let allCars = this.state.allCars;
    allCars.push(car);

    this.setState({ allCars: allCars });
  };

  deleteCar = (car) => {
    let allCars = this.state.allCars;
    let index = allCars.indexOf(car);

    allCars.splice(index, 1);

    this.setState({ allCars: allCars });
  };

  editCar = (car) => {
    let allCars = this.state.allCars;
    let index = getIndex(allCars, car);
    debugger;
    allCars[index] = car;

    this.setState({ allCars: allCars });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/add">
            <AddCar addCar={this.addCar} />
          </Route>
          <Route path="/edit/:id">
            <EditCar editCar={this.editCar} cars={this.state.allCars} />
          </Route>
          <Route path="/">
            <AllCars cars={this.state.allCars} deleteCar={this.deleteCar} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default CarCatalogApp;
