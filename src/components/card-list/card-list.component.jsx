import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({ dogs }) => {
  console.log('render from CardList')
  return (
    <div className="card-list">
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  )
}

export default CardList
