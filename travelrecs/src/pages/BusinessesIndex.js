import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BusinessesIndex() {
    const [businesses, setBusinesses] = useState([]);

    const [businessListAdd, setBusinessListAdd] = useState({
        name: "",
        rating: "",
        // _id: "",
        // review_count: "",
        // location: {
        //     address1: "",
        //     city: "",
        //     state: "",
        //     zip_code: ""
        // },
        // url: ""
    })

    async function getBusinesses() {
        try {
            let myBusinesses = await fetch("http://localhost:4000/businesses");
            myBusinesses = await myBusinesses.json();
            setBusinesses(myBusinesses);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBusinesses();
    }, []);

    function loaded(businesses) {
        return(
            <>
                {businesses.map((business, idx) => {
                    return(
                        <div key={idx}>
                                <Link to={`/businesses/${business._id}`}>
                                    <h2>{business.name}</h2>
                                </Link>
                                <h3>Yelp Rating ({business.review_count} reviews): {business.rating} ⭐</h3>
                                <h3>{business.location.address1}, {business.location.city}, {business.location.state} {business.location.zip_code}</h3>
                                <Link to={business.url}>Yelp Page</Link>
                                <br></br>
                                <br></br>
                                <button type="button">Add to List</button>
                                <hr />
                        </div>
                    )
                })}
            </>
        )
    }

    // async function addToList(business) {
    //     try {
    //         console.log("add");
    //         await fetch('http://localhost:4000/recommendations', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(business)
    //         })
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    function handleChange(e) {
        console.log(e.target);
        setBusinessListAdd((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e, business) {
        try {
            e.preventDefault();
            await fetch('http://localhost:4000/recommendations', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(businessListAdd)
            })
            e.target.reset();
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
                <label>Rating: </label>
                <input type="text" name="rating" onChange={handleChange}/>
                <button>Submit</button>
            </form>
            {businesses.length ? loaded(businesses) : <h2>Loading...</h2>}
        </>
    );
}

export default BusinessesIndex;