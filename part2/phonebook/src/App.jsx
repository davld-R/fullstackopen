import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newNamem, setNewName] = useState('');

  const addPhone = (event) => {
    event.preventDefault();
    const objetPhone = {
      name: newNamem,
      id: persons.length + 1,
    };
    setPersons(persons.concat(objetPhone));
    setNewName('');
  };

  const handlePhoneChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhone}>
        <div>
          name: <input value={newNamem} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((e, id) => (
        <div key={id}>{e.name}</div>
      ))}
    </div>
  );
};

export default App;
