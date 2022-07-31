import Meplug from "./MeplugApi";

const getCars = (data) => {
  return Meplug.post("/cars", data);
};

const CarService = {
  getCars,
};

export default CarService;
