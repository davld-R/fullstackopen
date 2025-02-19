import { useState } from 'react';

const Text = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  }

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100 + ' %';

  return (
    <table>
      <StatisticLine text={'good'} value={good} />
      <StatisticLine text={'neutral'} value={neutral} />
      <StatisticLine text={'bad'} value={bad} />
      <StatisticLine text={'all'} value={total} />
      <StatisticLine text={'average'} value={average} />
      <StatisticLine text={'positive'} value={positive} />
    </table>
  );
};

const Unicafe6 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Text text={'give feedback'} />
      <Button text={'good'} handleClick={handleClickGood} />
      <Button text={'neutral'} handleClick={handleClickNeutral} />
      <Button text={'bad'} handleClick={handleClickBad} />
      <Text text={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default Unicafe6;
