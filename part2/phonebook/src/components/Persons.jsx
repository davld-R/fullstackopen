import Person from './Person';

const Persons = ({ name, number, toggleDelete }) => {
  return (
    <div>
      <Person name={name} number={number} />
      <button onClick={toggleDelete}>Delete</button>
    </div>
  );
};

export default Persons;
