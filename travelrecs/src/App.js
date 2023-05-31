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
  // const [ recommendations, setRecommendations ] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async() => {
      try {
        let myRestaurants = await fetch("http://localhost:4000/restaurants");
        myRestaurants = await myRestaurants.json();
        setRestaurants(myRestaurants);
      } catch(err) {
        console.log(err);
      }
    }
    fetchRestaurants();
  }, []);

//   useEffect(() => {
//   const fetchRecommendations = async() => {
//     try{
//       let myRecommendations = await fetch("http://localhost:4000/recommendations");
//       myRecommendations = await myRecommendations.json();
//       setRecommendations(myRecommendations);
//     } catch(err) {
//       console.log(err);
//     }
//   }
//   fetchRecommendations();
// }, []);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations">
          <Route path='' element={<RecommendationsIndex restaurants={restaurants} />} />
          <Route path=":recommendationId" element={<RecommendationsShow restaurants={restaurants} />} />
        </Route>
        <Route path="/restaurants">
          <Route path='' element={<RestaurantIndex />} />
          <Route path=":restaurantId" element={<RestaurantShow />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
