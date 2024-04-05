import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieSlug/:movieId" element={<Movie />} />
          <Route path="/search/:cast/:directors/:genres" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
