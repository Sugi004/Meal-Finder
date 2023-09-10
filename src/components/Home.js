import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Cards from "./Cards";
import axios from "axios";

function Home() {
  let [meals, setMeals] = useState([]);
  let [foodName, setFoodName] = useState();

  let getMealsData = async () => {
    try {
      if (foodName) {
        let res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
        );
        if (res.data.meals === null) {
          alert("No food found");
          setMeals([]);
          setFoodName("");
          return;
        }
        setMeals(res.data.meals);
      } else {
        alert("Enter a food name to search");
        setMeals([]);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div>
          <Form className="search-wrapper">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              defaultValue={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <Button
              variant="outline-success"
              onClick={() => {
                getMealsData();
              }}
            >
              Search
            </Button>
          </Form>
        </div>

        <div className="card-wrapper">
          {meals.map((e, i) => {
            return (
              <Cards
                key={i}
                name={e.strMeal}
                image={e.strMealThumb}
                video={e.strYoutube}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
