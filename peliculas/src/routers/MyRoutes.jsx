import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import MovieDetails from "../pages/MovieDetails";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:movieid" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
