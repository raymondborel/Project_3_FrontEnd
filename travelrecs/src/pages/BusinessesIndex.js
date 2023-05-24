import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BusinessesIndex() {
    const [businesses, setBusinesses] = useState([]);

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
                                    <h2>Name: {business.name}</h2>
                                </Link>
                                <h3>Rating: {business.rating}</h3>
                                <hr />
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <>
            {businesses.length ? loaded(businesses) : <h2>Loading...</h2>}
        </>
    );
}

export default BusinessesIndex;