const Header = ({ text }) => {
  return (
    <div>
      {text.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};

export default Header;
