import React from 'react'
import "./MovieList.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function MovieList() {
  const movies = useSelector((state) => state.movies)
  
  return (
    <div className='movie_list'>
      {movies && movies.map((movie)=>(
        <div key={movie.imdbID} className='movie_item'>
          {movie.Poster !== 'N/A' ? (<img src={movie.Poster} alt="" />) : (<div className='poster'>{movie.Title}</div>)}
          
          <h3>{movie.Title}</h3>
          <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default MovieList