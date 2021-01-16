import React, { useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      
      {movies.map(movie => (
        <Movie  name={movie.name} price={movie.price} key={movie.id}/>
      ))}
    </>
  )
}

export default MovieList
