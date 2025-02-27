const Total = ({ text }) => {
  // const result = text.parts.reduce((sum, n) => sum + n.exercises, 0);
  const result = text.reduce((sum, n) => sum + n, 0);

  return (
    <div>
      <h4>total of {result} exercises</h4>
    </div>
  );
};

export default Total;
