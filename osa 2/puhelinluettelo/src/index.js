import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const App = () => {
    const [ persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '1234567890' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const rows = () => {
        return persons.map( person => <p key={person.name}> {person.name} {person.number} </p>)
    }

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }
        if ( persons.filter(e => e.name === newName).length === 0 ) {
            setPersons(persons.concat(nameObject))
        } else {
            window.alert("{newName} is already in the phonebook")
        }
        
        setNewName('')
        setNewNumber('')
    }

    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            name: <input 
            onChange={handleNameChange}
            value={newName}/>
          </div>
          <div>
            number: <input 
            onChange={handleNumberChange}
            value={newNumber}/>
          </div>
          <div>
            <button onClick={addName} type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {rows()}
      </div>
    )
  
  }

export default App


ReactDOM.render(
    <App />,
    document.getElementById('root')
)