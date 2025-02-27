const Part = ({ name, exercises, id }) => {
  return (
    <div>
      <p key={id}>
        {name} {exercises}
      </p>
    </div>
  );
};

export default Part;
