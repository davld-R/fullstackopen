import { useEffect, useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personService from './services/personService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const object = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1,
    };
    if (persons.find((e) => e.name === object.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(object).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
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

  const toglePersons = (id) => {
    const person = persons.find((e) => e.id === id);

    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deletePerson(id).then((returnedPerson) => {
        setPersons(persons.filter((e) => e.id !== id));
      });
    }
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
        {result.map((e) => (
          <Persons
            key={e.id}
            name={e.name}
            number={e.number}
            toggleDelete={() => toglePersons(e.id)}
          />
        ))}
      </div>
    </>
  );
};

export default App;
