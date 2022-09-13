import s from'./Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src={require("../../img/logo.png")} alt="company logo" />
    </header>
  );
}

export default Header;