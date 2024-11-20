import React, {useState, useEffect} from 'react'
import ListMovie from '../components/ListMovies'

const MoviesListPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    let getMovies = async () => {
        let response = await fetch('/api/movies')
        let data = await response.json()
        setMovies(data)
    }

    return (
        <div className='movies-list'>
            <h2 className="page-title">All Movie</h2>
            <div className='movie-detail'>
                {movies.map((movie, index) => (
                    <ListMovie movie={movie} key={index} />
                ))}
            </div>
        </div>
    )
}

export default MoviesListPage
