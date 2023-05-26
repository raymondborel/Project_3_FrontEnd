import { useEffect, useState } from "react";
import { useParams } from "react-router";

function RecommendationsShow() {
  const [recommendation, setRecommendation] = useState(null);
  const { recommendationId } = useParams();
//   console.log(recommendationId);

  async function getRecommendation() {
    try {
      let myRecommendation = await fetch(
        `http://localhost:4000/recommendations/${recommendationId}`
      );
      myRecommendation = await myRecommendation.json();
      setRecommendation(myRecommendation);
    } catch (err) {
      console.log(err);
    }
  }
  function recommendationLoaded() {
    return (
      <>
        console.log(recommendation)
        <h2>Name: {recommendation.name}</h2>
        <h2>Name: {recommendation.rating}</h2>
      </>
    );
  }

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <>
        {recommendation ? recommendationLoaded() : <h2>Loading...</h2>}
    </>
  )
}

export default RecommendationsShow;
