import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [foods, setFoods] = useState([]);

  const get_all_data = async () => {
    const res = await fetch("http://localhost:4000/foods", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.message);
    setFoods(data.message);
  };

  useEffect(() => {
    get_all_data();
  }, []);

  return (
    <div className="home-page__body">
      <div className="home-page__container">
        {foods.map((food) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img src={food.image} style={{ height: "75%" }}  className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{food.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
