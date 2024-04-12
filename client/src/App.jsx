import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:movieSlug/:movieId" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          {/* <Route
            path="/search/:cast/:directors/:genres/:title"
            element={<Search />}
          /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
