import React from 'react'
import "./BookmarkList.scss"
import { useSelector } from 'react-redux'
function BookmarkList() {
  const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <div className='bookmark_list'>
      {bookmarks && bookmarks.map((movie)=>(
        <>
          <div key={movie.imdbID} className='bookmark_item'>
            <img src={movie.Poster} alt="poster" />
            <h3>{movie.Title}</h3>
          </div>

        </>
      ))}
    </div>
  )
}

export default BookmarkList