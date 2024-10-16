"use client";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";

interface CarCarProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>{carRent}</span>
      </p>
    </div>
  );
};

export default CarCard;
