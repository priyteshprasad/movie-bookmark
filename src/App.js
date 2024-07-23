import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/MovieList/MovieList";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions/movieActions";
import { useEffect } from "react";

const randomMovies = [
  "Action-packed",
  "Romance",
  "Thriller",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Fantasy",
  "Horror",
  "Adventure",
  "Mystery",
  "Animation",
  "Biopic",
  "Documentary",
  "Historical",
  "Superhero",
  "Musical",
  "Crime",
  "Family",
  "Indie",
  "Western",
];

function App() {
  const isDarkMode = useSelector(state => state.isDarkMode)
  const dispatch = useDispatch(fetchMovies())
  useEffect(() => {
    dispatch(
      fetchMovies(randomMovies[Math.floor(Math.random() * randomMovies.length)])
    );
  }, []);
  return (
      <Router>
        <div className={`App ${isDarkMode ? 'dark': 'light'}`}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <MovieList />
                </>
              }
            />
            <Route path="/bookmarks" element={<BookmarkList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;

// a tag reloads the whole page, but the Link does not reload the whole page
// we want to minimize the number of refreshesh in react application
