import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecommendationsShow from "./pages/RecommendationsShow";
import RecommendationsIndex from "./pages/RecommendationsIndex";
import RestaurantIndex from "./pages/RestaurantIndex";
import RestaurantShow from "./pages/RestaurantShow";


function App() {
  const [ restaurants, setRestaurants ] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async() => {
      try {
        let myRestaurants = await fetch("http://localhost:4000/businesses");
        myRestaurants = await myRestaurants.json();
        setRestaurants(myRestaurants);
      } catch(err) {
        console.log(err);
      }
    }
    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations">
          <Route path='' element={<RecommendationsIndex restaurants={restaurants} />} />
          <Route path=":recommendationId" element={<RecommendationsShow restaurants={restaurants} />} />
        </Route>
        <Route path="/businesses">
          <Route path='' element={<RestaurantIndex restaurants={restaurants} />} />
          <Route path=":restaurantId" element={<RestaurantShow />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
