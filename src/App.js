import React, { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('') // [value, setValue]
  const [dogs, setDogs] = useState([])
  const [filteredDogs, setFilteredDogs] = useState(dogs)

  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setDogs(data))
  }, [])

  useEffect(() => {
    const newFilteredDogs = dogs.filter((dog) => {
      return dog.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredDogs(newFilteredDogs)

    console.log('filter effect firing')
  }, [dogs, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

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

export default App
