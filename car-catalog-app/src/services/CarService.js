const cars = [
  {
    id: 1,
    model: "BMW",
    horsePower: 150,
    color: "White",
    fuelType: "Diesel",
    engine: "320 D",
  },
  {
    id: 2,
    model: "BMW",
    horsePower: 204,
    color: "Gray",
    fuelType: "Diesel",
    engine: "330 D",
  },
  {
    id: 3,
    model: "Audi",
    horsePower: 114,
    color: "Black",
    fuelType: "Diesel",
    engine: "1.9 TDI",
  },
  {
    id: 4,
    model: "Audi",
    horsePower: 150,
    color: "Black",
    fuelType: "Gasoline",
    engine: "1.8 Turbo",
  },
  {
    id: 5,
    model: "BMW",
    horsePower: 150,
    color: "Blue",
    fuelType: "Gasoline",
    engine: "320 i",
  },
];

export const getCars = () => {
  return cars;
};
