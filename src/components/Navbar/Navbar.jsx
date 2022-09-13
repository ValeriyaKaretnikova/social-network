import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div >
        <a href="#c" className={`${s.item} ${s.active}`}>Profile</a>
      </div>
      <div className={s.item}>
        <a href="#c" className={s.item}>Messages</a>
      </div>
      <div className={s.item}>
        <a href="#c" className={s.item}>News</a>
      </div>
      <div className={s.item}>
        <a href="#c" className={s.item}>Music</a>
      </div>
      <div className={s.item}>
        <a href="#c" className={s.item}>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
