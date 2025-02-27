const Total = ({ text }) => {
  const result = text.parts.reduce((sum, n) => sum + n.exercises, 0);

  return (
    <div>
      <p>total of {result} exercises</p>
    </div>
  );
};

export default Total;
