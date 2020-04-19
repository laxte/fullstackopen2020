import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const addPerson = (event) => {
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


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
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
      console.log(person)
      return (
        <Person key={person.name} name={person.name} />
      )
    }
    )
  )
}

const Person = (props) => {
  return (
    <p> {props.name} </p>
  )
}

export default App