import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import RestaurantsShow from "./pages/RestaurantsShow";
import RestaurantsIndex from "./pages/RestaurantsIndex";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants">
          <Route path='' element={<RestaurantsIndex />} />
          <Route path=":restaurantId" element={<RestaurantsShow />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
