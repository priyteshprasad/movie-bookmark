import React, { useEffect, useState } from 'react'
import "./SearchBar.scss"
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movieActions'



const  SearchBar = () => {
  const [query, setQuery] = useState("")
  
  const dispatch = useDispatch()
    const handleSearch = (e) => {
        e.preventDefault(); //prevents from page reload
        dispatch(fetchMovies(query))
    }
  
  return (
    <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder='Search for a movie...' />
        <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar