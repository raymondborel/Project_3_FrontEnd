import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function RestaurantShow() {
  const [restaurant, setRestaurant] = useState(null);
  const { restaurantId } = useParams();

  async function getRestaurant() {
    try {
      let myRestaurant = await fetch(
        `http://localhost:4000/restaurants/${restaurantId}`
      );
      myRestaurant = await myRestaurant.json();
      console.log(myRestaurant);
      setRestaurant(myRestaurant);
    } catch (err) {
      console.log(err);
    }
  }

  function restaurantLoaded(restaurant) {
    return (
      <div>
        <h2>{restaurant.name}</h2>
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          width="300px"
          height="300px"
        />
        <h3>Categories: |{restaurant.categories.map((categories, idx) => {
          return (
            <> {categories.title} |</>
          );
        })}</h3>
        <h3>
          Yelp Rating ({restaurant.review_count} reviews): {restaurant.rating}{" "}
          ⭐
        </h3>
        <h3>
          {restaurant.location.address1}, {restaurant.location.city},{" "}
          {restaurant.location.state} {restaurant.location.zip_code}
        </h3>
        <h3>{restaurant.phone}</h3>
        <Link to={restaurant.url}>Yelp Page</Link>
        <br></br>
        <br></br>
        <button onClick={handleAddToList}>Add to List</button>
      </div>
    );
  }

  useEffect(() => {
    getRestaurant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAddToList() {
    try {
      await fetch("http://localhost:4000/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: restaurant.name,
          rating: restaurant.rating,
          image_url: restaurant.image_url,
          review_count: restaurant.review_count,
          location: {
            address1: restaurant.location.address1,
            city: restaurant.location.city,
            state: restaurant.location.state,
            zip_code: restaurant.location.zip_code,
          },
          categories: [{
            alias: restaurant.categories.alias,
            title: restaurant.categories.title
          }],
          url: restaurant.url,
          _id: restaurant._id,
          phone: restaurant.phone,
        }),
      });
      console.log("Restaurant added to the recommendations list");
    } catch (err) {
      console.log(err);
    }
  }

  return restaurant ? restaurantLoaded(restaurant) : <h2>Loading</h2>;
}

export default RestaurantShow;
