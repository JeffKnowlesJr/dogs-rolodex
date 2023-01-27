import Card from '../card/card.component'
import React from 'react'
import './card-list.styles.css'

const CardList = ({ dogs }) => {
  return (
    <div className="card-list">
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  )
}

export default CardList
