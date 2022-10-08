import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={require("../../img/logo4.png")} alt="company logo" />

      <div className={s.loginContainer}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button className={s.bLogout} onClick={props.logout}>
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
