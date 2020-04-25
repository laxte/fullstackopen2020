import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '12345'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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

  const handleNewNameChange = (event) => {
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button id="mybutton" type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )

}

const Persons = (props) => {
  return (
    props.persons.map(person => {
      return (
        <Person key={person.name} name={person.name} number={person.number}/>
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