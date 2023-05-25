import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BusinessShow () {
    const [ business, setBusiness ] = useState(null);
    const { businessId } = useParams();
    
    async function getBusiness() {
        try {
            let myBusiness = await fetch(`http://localhost:4000/businesses/${businessId}`);
            myBusiness = await myBusiness.json();
            console.log(myBusiness);
            setBusiness(myBusiness);
        } catch(err) {
            console.log(err);
        }
    }

    function businessLoaded(business) {
        return(
            <>
                <h2>{business.name}</h2>
                <h3>{business.rating}</h3>
            </>
        )
    }

    useEffect(() => {
        getBusiness();
    }, []);
    

    return(
        (business ? businessLoaded(business) : <h2>Loading...</h2>)
    )
}

export default BusinessShow;