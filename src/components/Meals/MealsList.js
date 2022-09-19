import React from "react";
import Meals from "./Meals";
import MealsInfo from './MealsInfo';
import "./MealsList.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = (props) => {
  return (
    <section className="main">
      <MealsInfo />
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <Meals item={meal} key={meal.id} />;
        })}
      </ul>
    </section>
  );
};

export default MealsList;
