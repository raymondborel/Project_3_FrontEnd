import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//const { recommendationId } = useParams();

function RecommendationsIndex(props) {
  const [recommendations, setRecommendations] = useState([]);

  const [recommendationsForm, setRecommendationsForm] = useState({
    name: "",
    rating: "",
    image_url: "",
  });

  async function getRecommendations() {
    try {
      let myRecommendations = await fetch(
        "http://localhost:4000/recommendations"
      );
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
      <div className="bgColor">
        {arr.map((recommendation, idx) => {
          return (
            <div key={idx}>
              <Link to={`/restaurants/${recommendation._id}`}>
                <h3 className="text-decoration-none">{recommendation.name}</h3>
                <img
                  src={recommendation.image_url}
                  alt={recommendation.name}
                  width="300px"
                  height="300px"
                />
              </Link>
              <h3>
                Yelp Rating ({recommendation.review_count} reviews):{" "}
                {recommendation.rating} ⭐
              </h3>
              <button onClick={() => handleDeleteFromList(recommendation._id)}>
                Delete from List
              </button>
              <hr />
            </div>
          );
        })}
      </div>
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
      await fetch("http://localhost:4000/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recommendationsForm),
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFromList(recommendationId) {
    try {
      await fetch(`http://localhost:4000/recommendations/${recommendationId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedRecommendations = recommendations.filter(
        (recommendation) => recommendation._id !== recommendationId
      );
      setRecommendations(updatedRecommendations);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container-fluid bgColor">
        <form className="form" onSubmit={handleSubmit}>
          <label className="text-white">Name: </label>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <label className="text-white">Rating: </label>
          <input
            type="text"
            name="rating"
            onChange={handleChange}
            placeholder="Rating"
          />
          <label className="text-white">Image Url: </label>
          <input
            type="text"
            name="image_url"
            onChange={handleChange}
            placeholder="Image Url"
          />
          <button value="submit">Submit</button>
        </form>
        {recommendations.length ? loaded(recommendations) : <h2>Loading...</h2>}
      </div>
    </>
  );
}

export default RecommendationsIndex;
