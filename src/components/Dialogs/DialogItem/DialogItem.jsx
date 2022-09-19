import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = ({ id, name }) => {
  return (
    <div className={s.dialog}>
      <img src={require("../../../img/ava2.jpg")} alt="avatar" />
      <NavLink className={s.link} to={`${"/dialogs/" + id}`}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
