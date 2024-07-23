import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";
import {
  bookmarkMovie,
  fetchMovieDetails,
} from "../../redux/actions/movieActions";
import movieReducer from "../../redux/reducers/movieReducer";
import { CircularProgress } from "@mui/material";
function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector((state) => state.selectedMovie);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    console.log("mymovie", movie);
  }, []);
  const handleBookmark = () => {
    dispatch(bookmarkMovie(movie));
  };
  return (
    <div className="details_wrapper">
      <div className="movie_details">
        {loading ? (
          <CircularProgress />
        ) : (
          movie && (
            <>
              <img src={movie.Poster} alt="poster" />
              <div className="">
                <h2>{movie.Title}</h2>
                <p>{movie.Plot}</p>
                <button onClick={handleBookmark}>Bookmark</button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}
// TODO: improve the details
// when loading 2nd time, show the loading instead of prev details
// remove the movie

export default MovieDetails;
