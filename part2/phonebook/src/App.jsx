import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '3124567896' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const object = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    if (persons.find((e) => e.name === object.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(object));
    }
    setNewName('');
    setNewNumber('');
  };
  console.log(persons);

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((e) => (
          <div key={e.id}>
            {e.name} {e.number}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
