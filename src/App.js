import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor(props) {
    super() // calls constructor method on the extnded component

    this.state = {
      dogs: [],
      searchField: ''
    }

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount App.js')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        this.setState(
          () => {
            return { dogs: data }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    console.log(`searchField: ${searchField}`)
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render from App.js')

    // Destructuring
    const { dogs, searchField } = this.state
    const { onSearchChange } = this

    const filteredDogs = dogs.filter((dog) => {
      return dog.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <h1 className="site-header">Dogs Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'Search Dogs'}
          className={'dogs-search-box'}
        />
        <CardList dogs={filteredDogs} />
      </div>
    )
  }
}

export default App
