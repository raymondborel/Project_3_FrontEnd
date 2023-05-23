import { useState, useEffect } from "react";

function Home() {
  const [recommendations, setRecommendations] = useState(null);

  async function fetchRecommendations() {
    try {
      let myRecommendations = await fetch("http://localhost:4000/recommendations");
      myRecommendations = await myRecommendations.json();
      console.log(myRecommendations);
      setRecommendations(myRecommendations);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRecommendations();
  }, []);

if(!recommendations) return <h2>Loading...</h2>

else return (
    <>
      {recommendations.map((recommendation, idx) => {
        return (
          <div key={idx}>
            <h2>{recommendation.name}</h2>
          </div>
        );
      })}
    </>
  );
}

export default Home;
