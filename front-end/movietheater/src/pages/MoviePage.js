import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MoviePage = () => {
  let params = useParams(null);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovie();
  }, [params.id]);

  let getMovie = () => {
    fetch(`/api/movies/${params.id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie-detail-page">
      <div className="top-content">
        <div className="poster">
          <img src={movie.image} className="responsive-poster" />
        </div>
        <div className="movie-content">
          <div className="top">
            <h3>{movie.title}</h3>
            <br />
            <Link to={`/movie/${params.id}/screens`} className="btn btn-danger">Book now</Link>
            <p className="description">{movie.description}</p>
          </div>
          <div className="bottom">
            <h3>Trailer</h3>
            <iframe
              className="youtube-frame"
              src={movie.trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          
        </div>
      </div>
     
      <div className="bottom-content">
        
      </div>
    </div>
  );
};

export default MoviePage;
