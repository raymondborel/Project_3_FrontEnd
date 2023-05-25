import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantShow(props) {
    // console.log(`This is props for show page: ${props.recommendations}`);
    // console.log(props.recommendations.length);
    // console.log(props.recommendations[2]);
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

    function restaurantLoaded(restaurant) {
        return(
            <>
                <h2>{restaurant.name}</h2>
                <h3>{restaurant.rating}</h3>
                <button>Add to List</button>
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