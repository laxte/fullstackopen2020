import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const addContact = (event) => {
    event.preventDefault()
    console.log(event.target)
    const personObject = {
      name : newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  } 

 const handleNewNameChange = (event) => {
   console.log(event.target.value)
   setNewName(event.target.value)
 }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )

}

const Numbers = (props) => {
  return (
    props.persons.map(person => {
      console.log(person)
      return (
        <Number key={person.name} name={person.name} />
      )
    }
    )
  )
}

const Number = (props) => {
  return (
    <p> {props.name} </p>
  )
}

export default App