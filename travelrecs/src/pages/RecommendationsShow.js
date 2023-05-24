import { useParams } from "react-router";

function RecommendationsShow () {
    const { recommendationId } = useParams();
    console.log(recommendationId)
    return (
        <h2> This is your recommended restaurant's Show Page </h2>
    )
}

export default RecommendationsShow;