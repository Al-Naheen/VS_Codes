import React from 'react'

const Movie = ({name, price}) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
    </>
  )
}

export default Movie
