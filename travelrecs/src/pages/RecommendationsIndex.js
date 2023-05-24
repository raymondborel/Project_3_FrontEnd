import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function RecommendationsIndex() {
  const [recommendations, setRecommendations] = useState([]);

  const [recommendationsForm, setRecommendationsForm] = useState({
    name: "",
    rating: "",
    image_url: "",
  });

  async function getRecommendations() {
    try {
      let myRecommendations = await fetch("http://localhost:4000/recommendations");
      myRecommendations = await myRecommendations.json();
      setRecommendations(myRecommendations);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRecommendations();
  }, []);

  function loaded(arr) {
    return (
      <>
        {arr.map((recommendation, idx) => {
          return (
            <div key={idx}>
                <Link to= {`/recomendations/${recommendation._id}`}>
              <h2>{recommendation.name}</h2>
                </Link>
              <h2>{recommendation.rating}</h2>
              <h2>{recommendation.review_count}</h2>
              <h2>{recommendation.image_url}</h2>
              <h2>{recommendation.url}</h2>

              <hr />
            </div>
          );
        })}
      </>
    );
  }

  function handleChange(e) {
    setRecommendationsForm((previoiusFormState) => ({
      ...previoiusFormState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
      try {
        e.preventDefault();
        await fetch("http://localhost:4000/recommendations" , {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(recommendationsForm)
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
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <label>Rating: </label>
        <input
          type="text"
          name="rating"
          onChange={handleChange}
          placeholder="Rating"
        />
        <label>Image Url: </label>
        <input
          type="text"
          name="image_url"
          onChange={handleChange}
          placeholder="Image Url"
        />
        <button value="submit">Submit</button>
      </form>
      {recommendations.length ? loaded(recommendations) : <h2>Loading...</h2>}
    </>
  );
}

export default RecommendationsIndex;
