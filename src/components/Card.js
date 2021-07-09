import React from 'react'

/**
* @author
* @function Card
**/

const Card = (props) => {
    const { movie } = props;

  return(
    <div className="resultCard">
        <figure className="image is-48x48">
            <img
                src={movie.Poster}
                alt= {movie.Title}
            />

        </figure>
        <h4 class="bolder">{movie.Title}</h4>
        <span><b>Year:</b>{movie.Year}</span>
    </div>
   )

 }

export default Card