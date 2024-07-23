import {
  BOOKMARK_MOVIE,
  FETCH_MOVIES_DETAILS_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST
} from "./types";
import axios from "axios";

const APIKEY = "3b134c95";
const BASE_URL = `http://www.omdbapi.com/?apikey=${APIKEY}`;

export const fetchMovies = (query) => async (dispatch) => { //returns async function called thunk
  dispatch({ type: FETCH_MOVIES_REQUEST }); //update the state
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`); //make api call
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data.Search }); //upadte the state
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message }); //update state
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({type: FETCH_MOVIE_DETAILS_REQUEST})  
  try {
        const response = await axios.get(`${BASE_URL}&i=${id}`);
        dispatch({type: FETCH_MOVIES_DETAILS_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({type: FETCH_MOVIE_DETAILS_FAILURE})
        alert(error)
    }
}

export const bookmarkMovie = (movie)=> ({type: BOOKMARK_MOVIE, payload: movie})