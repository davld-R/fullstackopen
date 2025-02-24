import { useState } from 'react';

const Text = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} text={text}>
      hola
    </button>
  );
};

// const Display = ({ pais, setPais }) => {
//   return <div>{pais}</div>;
// };

const Pais = () => {
  const [selected, setSelected] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [pais, setPais] = useState({
    0: 'Argentina',
    1: 'Brasil',
    2: 'Chile',
    3: 'Uruguay',
    4: 'Paraguay',
    5: 'Bolivia',
    6: 'Peru',
    7: 'Colombia',
    8: 'Venezuela',
    9: 'Ecuador',
  });
  const [ciudad, setCiudad] = useState({
    0: 'Buenos Aires',
    1: 'Brasilia',
    2: 'Santiago',
    3: 'Montevideo',
    4: 'Asuncion',
    5: 'La Paz',
    6: 'Lima',
    7: 'Bogota',
    8: 'Caracas',
    9: 'Quito',
  });

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * Object.keys(pais).length));
    // setCiudad(pais[selected]);
    console.log(selected);
  };

  return (
    <>
      <Text text={'Paises'} />
      <div>{pais[selected]}</div>
      <Text text={'Ciudad'} />
      <div>{ciudad[selected]}</div>
      <Button handleClick={handleClick} text={'Cambiar'} />
    </>
  );
};

export default Pais;
