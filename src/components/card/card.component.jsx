import { Component } from 'react'
import './card.styles.css'

class Card extends Component {
  render() {
    console.log('render from card')
    const { id, name, email } = this.props.dog

    return (
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set4&size=240x240`}
          alt={`dog ${name}`}
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
