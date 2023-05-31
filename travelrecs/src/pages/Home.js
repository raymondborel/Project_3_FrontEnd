import { Link } from "react-router-dom";

function Home() {

  return (
    <>
    <div className="bgColor container-fluid h-100 d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1>Ready to get started?</h1>
      <div className="d-flex justify-content-center mt-3">
      <Link to= {'/recommendations'}>
        <button className=" btn  btn-outline-primary btn-lg me-2">See our list!</button>
      </Link>
      <Link to={'/restaurants'}>
        <button className=" btn  btn-outline-primary btn-lg">Search for restaurants!</button>
      </Link>
      </div>
      <div>
        <div className="container-fluid h-100 mb-4"></div>
      </div>
    </div>

    </>
  );

}


export default Home;
