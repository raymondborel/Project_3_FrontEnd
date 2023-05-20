import { useState, useEffect } from "react";


function RecommendationsIndex() {
  const [recommendations, setRecommendations] = useState([]);

  async function getRecommendations() {
    try {
      let myRecommendations = fetch("http://localhost:2000/recommendations");
      myRecommendations = await myRecommendations.json();
      setRecommendations(myRecommendations);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRecommendations();
  }, []);

  function loaded() {
    return (
      <>
        {recommendations.map((recommendation, idx) => {
          return (
            <div key={idx}>
              <h2>{recommendation.name}</h2>
              <h2>{recommendation.rating}</h2>
              <h2>{recommendation.image}</h2>
              <hr />
            </div>
          );
        })}
      </>
    );
  }

  return (recommendations ? loaded() : <h2>loading</h2>);
}

export default RecommendationsIndex;
