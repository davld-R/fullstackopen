const Header = ({ id, text }) => {
  return (
    <div>
      {/* {text.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))} */}
      <h1 key={id}>{text}</h1>
    </div>
  );
};

export default Header;
