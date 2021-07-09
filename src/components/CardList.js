import React from 'react'
import Card from './Card'

/**
* @author
* @function CardList
**/

const CardList = ({ results }) => {
    let data = [];
    if (results.data) {
      data = results.data.Search || [];
    }

  return(
    <div className="result">
        {data.map((item) => (
            <Card key={item.imdbID} movie={item} />
        ))}
    </div>
   )

 }

export default CardList