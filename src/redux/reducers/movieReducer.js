import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_DETAILS_SUCCESS,
  BOOKMARK_MOVIE,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  SWITCH_THEME,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  movies: [],
  selectedMovie: null,
  bookmarks: [],
  loading: false,
  error: null,
  isDarkMode: true,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_MOVIE_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_MOVIES_DETAILS_SUCCESS:
      return { ...state, loading:false, selectedMovie: action.payload};
    case BOOKMARK_MOVIE:
      return { ...state, bookmarks: [...state.bookmarks, action.payload]};
    case SWITCH_THEME:
      return {...state, isDarkMode: !state.isDarkMode}
    default:
      return state
  }
};

export default movieReducer