const Person = ({ person }) => {
  return (
    <>
      {person.map((e) => (
        <div key={e.id}>
          {e.name} {e.number}
        </div>
      ))}
    </>
  );
};

export default Person;
