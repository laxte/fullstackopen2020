import React, { useState , useEffect } from 'react'
import server from './server.js'

const App = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const baseUrl = 'http://localhost:3001/persons'


  useEffect(() => {
    server.getAll(baseUrl)
      .then(response => setPersons(response.data))
  }, [])


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    server.create(baseUrl, personObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
        showMessage(`Added ${personObject.name}`)
      })
  }

  const deletePerson = (event) => {
    const name = event.target.name
    if (window.confirm(`Delete ${name} ?`)) {
      event.preventDefault()
      const id = parseInt(event.target.id)
      server.deletePerson(baseUrl, id)
        .then(response => {
          const filteredPersons = persons.filter(person => {
            return person.id !== id
          })
          setPersons(filteredPersons)
          showMessage(`Deleted ${name}`)
        })
    }
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
  }

  const showMessage = (messageToShow) => {
    setMessage(messageToShow)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <Filter newFilter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNewNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

const Message = (props) => {
  const messageStyle =
  {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (props.message == null) {
    return <div></div>
  }
  else {
    return (
      <div style={messageStyle}>
        {props.message}
      </div>
    )
  }
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
  if (props.persons.length < 1) {
    return null
  }
  let filteredPersons = props.persons.slice()
  if (props.filter.length !== 0) {
    filteredPersons = props.persons.filter(person =>
      person.name.toLowerCase().includes(props.filter.toLowerCase()
      ))
  }

  return (
    filteredPersons.map(person => {
      return (
        <Person key={person.id} id={person.id} name={person.name} number={person.number} deletePerson={props.deletePerson}/>
      )
    }
    )
  )
}

const Person = (props) => {
  return (
    <p> {props.name} {props.number} <button onClick={props.deletePerson} id={props.id} name={props.name}>delete</button></p> 
  )
}

export default App