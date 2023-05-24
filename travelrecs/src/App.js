import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import RecommendationsShow from "./pages/RecommendationsShow";
import RecommendationsIndex from "./pages/RecommendationsIndex";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations">
          <Route path='' element={<RecommendationsIndex />} />
          <Route path=":recommendationsId" element={<RecommendationsShow />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
