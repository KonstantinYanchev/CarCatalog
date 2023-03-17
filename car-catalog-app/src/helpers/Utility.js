export const getIndex = (cars, car) => {
    let result = -1;
    for(let i = 0; i < cars.length; i++) {
        if(car.id == cars[i].id) {
            result = i;
            break;
        }
    }

    return result;
  };