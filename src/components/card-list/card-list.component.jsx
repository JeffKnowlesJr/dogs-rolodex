import { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
  render() {
    console.log('render from card list')
    const { dogs } = this.props

    return (
      <div className="card-list">
        {dogs.map((dog) => (
          <Card key={dog.id} dog={dog} />
        ))}
      </div>
    )
  }
}

export default CardList
