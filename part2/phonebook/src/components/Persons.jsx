import Person from './Person';

const Persons = ({ persons }) => {
  return (
    <div>
      <Person person={persons} />
    </div>
  );
};

export default Persons;
