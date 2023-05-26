import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantShow(props) {
    console.log(`This is props for show page: ${props.recommendations}`);
    console.log(props.recommendations.length);
    const [ restaurant, setRestaurant ] = useState(null);
    const { restaurantId } = useParams();
    
    async function getRestaurant() {
        try {
            let myRestaurant = await fetch(`http://localhost:4000/restaurants/${restaurantId}`);
            myRestaurant = await myRestaurant.json();
            console.log(myRestaurant);
            setRestaurant(myRestaurant);
        } catch(err) {
            console.log(err);
        }
    }

    async function handleAddToList() {
        try {
            await fetch("http://localhost:4000/recommendations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify( {
                    name: restaurant.name,
                    rating: restaurant.rating,
                }),
            });
            console.log("Restaurant added to the recommendations list");
        } catch(err) {
            console.log(err);
        }
    }

    function restaurantLoaded(restaurant) {
        return(
            <>
                <h2>{restaurant.name}</h2>
                <h3>{restaurant.rating}</h3>
                <button onClick={handleAddToList}>Add to List</button>
            </>
        )
    }

    useEffect(() => {
        getRestaurant();
    }, []);

    return(
        (restaurant ? restaurantLoaded(restaurant) : <h2>Loading...</h2>)
    )
}

export default RestaurantShow;