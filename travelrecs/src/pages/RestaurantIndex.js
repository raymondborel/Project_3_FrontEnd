import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RestaurantIndex() {
    const [restaurants, setRestaurants] = useState([]);

    async function getRestaurants() {
        try {
            let myRestaurants = await fetch('http://localhost:4000/restaurants');
            myRestaurants = await myRestaurants.json();
            setRestaurants(myRestaurants);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRestaurants();
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

    function loaded(restaurants) {
        return (
          <div className="bgColor">
            {restaurants.map((restaurant, idx) => {
              return (
                <div key={idx}>
                  <Link to={`/restaurants/${restaurant._id}`}>
                    <h2 className="text-decoration-none text-darkgray-1">{restaurant.name}</h2>
                    <img src={restaurant.image_url} alt={restaurant.name} width="300px" height="300px"/>
                  </Link>
                  <h3>
                    Yelp Rating ({restaurant.review_count} reviews):{" "}{restaurant.rating} ⭐</h3>
                  <button onClick={() => handleAddToList(restaurant)}>Add to List</button>
                  <br></br>
                  <br></br>
                  <hr />
                </div>
                );
            })}
          </div>
        );
      }

    async function handleAddToList(restaurant) {
        try {
            console.log("add");
            await fetch('http://localhost:4000/recommendations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {
                    name: restaurant.name,
                    rating: restaurant.rating,
                    image_url: restaurant.image_url,
                    review_count: restaurant.review_count,
                    location: {
                        address1: restaurant.location.address1,
                        city: restaurant.location.city,
                        state: restaurant.location.state,
                        zip_code: restaurant.location.zip_code
                    },
                    url: restaurant.url,
                    _id: restaurant._id,
                    phone: restaurant.phone
                }),
            });
            console.log("Restaurant added to recommendations list from restaurantIndex")
            console.log(restaurant.name)
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            {restaurants.length ? loaded(restaurants) : <h2>Loading..</h2>}
        </>
    );
}

export default RestaurantIndex;