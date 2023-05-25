import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function RecommendationsShow() {
  const [recommendation, setRecommendation] = useState(null);
  const { recommendationId } = useParams();
  console.log(recommendationId);

  async function getRecommendation() {
    try {
      let myRecommendation = await fetch(
        `http://localhost:400/recommendation/${recommendationId}`
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
        <h2>Name: {recommendation.title}</h2>
        <h2>Name: {recommendation.rating}</h2>
        </>
    )
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
