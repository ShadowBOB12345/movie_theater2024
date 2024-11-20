import React from 'react'
import {Link} from 'react-router-dom'

const ListMovies = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
        <div className='movie'>
          <div className='img'>
            <img src={movie.image} width="200px"></img>
          </div>
          <div className='title' width="200px" height="50px">{movie.title}</div>
        </div>
    </Link>
  )
}

export default ListMovies
