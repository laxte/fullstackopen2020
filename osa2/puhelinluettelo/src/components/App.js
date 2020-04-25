import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
 
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    const newName = event.target.value
    setNewName(newName)
    const mathces = persons.filter(person => person.name === newName)
    if (mathces.length > 0) {
      window.alert(`${newName} is already added to phonebook`)
      document.getElementById("mybutton").disabled = true
    }
    else {
      document.getElementById("mybutton").disabled = false
    }
  }

  const handleNumberChange = (event) => {
    const newNumber = event.target.value
    setNewNumber(newNumber)
  }

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    console.log(newFilter)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNewNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.newName} onChange={props.handleNewNameChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button id="mybutton" type="submit">add</button>
      </div>
    </form>
  )
}

const Filter = (props) => {
  return (
    <div>
      filter shown with: <input value={props.newFilter} onChange={props.handleFilterChange} />
    </div>
  )

}

const Persons = (props) => {

  let filteredPersons = props.persons.slice()
  if (props.filter.length !== 0) {
    filteredPersons = props.persons.filter(person =>
      person.name.toLowerCase().includes(props.filter.toLowerCase()
      ))
  }

  return (
    filteredPersons.map(person => {
      return (
        <Person key={person.name} name={person.name} number={person.number} />
      )
    }
    )
  )
}

const Person = (props) => {
  return (
    <p> {props.name} {props.number}</p>
  )
}

export default App