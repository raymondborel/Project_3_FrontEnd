import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

function RestaurantIndex(props) {
    // const [restaurants, setRestaurants] = useState([]);
    console.log(`This is the index page for restaurants: ${props.restaurants}`);
    console.log(props.restaurants);
    // const [restaurantListAdd, setRestaurantsListAdd] = useState({
    //     name: "",
    //     rating: "",
    //     // _id: "",
    //     // review_count: "",
    //     // location: {
    //     //     address1: "",
    //     //     city: "",
    //     //     state: "",
    //     //     zip_code: ""
    //     // },
    //     // url: ""
    // })

    // async function getRestaurants() {
    //     try {
    //         let myRestaurants = await fetch("http://localhost:4000/restaurants");
    //         myRestaurants = await myRestaurants.json();
    //         setRestaurants(myRestaurants);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(() => {
    //     getRestaurants();
    // }, []);

    // function loaded(restaurants) {
    //     return(
    //         <>
    //             {restaurants.map((restaurant, idx) => {
    //                 return(
    //                     <div key={idx}>
    //                             <Link to={`/restaurants/${restaurant._id}`}>
    //                                 <h2>{restaurant.name}</h2>
    //                             </Link>
    //                             <h3>Yelp Rating ({restaurant.review_count} reviews): {restaurant.rating} ⭐</h3>
    //                             <h3>{restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</h3>
    //                             <Link to={restaurant.url}>Yelp Page</Link>
    //                             <br></br>
    //                             <br></br>
    //                             <form onSubmit={handleSubmit}>
    //                                 <input type="text" name="name" placeholder={restaurant.name} onChange={handleChange}/>
    //                                 <input type="text" name="rating" placeholder={restaurant.rating} onChange={handleChange}/>
    //                                 <button>Add to List</button>
    //                             </form>
    //                             <hr />
    //                     </div>
    //                 )
    //             })}
    //         </>
    //     )
    // }


    // async function addToList(restaurant) {
    //     try {
    //         console.log("add");
    //         await fetch('http://localhost:4000/recommendations', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(restaurant)
    //         })
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // function handleChange(e) {
    //     console.log(e.target);
    //     setRestaurantListAdd((previousFormState) => ({
    //         ...previousFormState,
    //         [e.target.name]: e.target.value
    //     }))
    // }

    // async function handleSubmit(e) {
    //     try {
    //         e.preventDefault();
    //         await fetch('http://localhost:4000/recommendations', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(restaurantListAdd)
    //         })
    //         e.target.reset();
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    return (
        <>
            {/* {restaurants.length ? loaded(restaurants) : <h2>Loading...</h2>} */}
            {props.restaurants.map((restaurant, idx) => {
                    return(
                        <div key={idx}>
                                <Link to={`/restaurants/${restaurant._id}`}>
                                    <h2>{restaurant.name}</h2>
                                    <img src={restaurant.image_url} alt={restaurant.name} width="300px" height="300px"/>
                                </Link>
                                <h3>Yelp Rating ({restaurant.review_count} reviews): {restaurant.rating} ⭐</h3>
                                <h3>{restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</h3>
                                <Link to={restaurant.url}>Yelp Page</Link>
                                <br></br>
                                <br></br>
                                <button>Add to List</button>
                                {/* <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder={restaurant.name} onChange={handleChange}/>
                                    <input type="text" name="rating" placeholder={restaurant.rating} onChange={handleChange}/>
                                    <button>Add to List</button>
                                </form> */}
                                <hr />
                        </div>
                    )
                })}
        </>
    );
}

export default RestaurantIndex;