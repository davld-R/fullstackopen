import { useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const object = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.find((e) => e.name === object.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(object));
    }
    setNewName('');
    setNewNumber('');
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const result = persons.filter(
    (e) => e.name.toLowerCase().indexOf(newFilter.toLowerCase()) > -1
  );

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleChangeFilter} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleChangeName={handleChangeName}
        newNumber={newNumber}
        handleChangeNumber={handleChangeNumber}
      />
      <h2>Numbers</h2>
      <div>
        <Persons persons={result} />
      </div>
    </>
  );
};

export default App;
