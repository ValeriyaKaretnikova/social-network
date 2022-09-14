import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = ({ id, name }) => {
  return (
    <div className={s.dialog}>
      <NavLink className={s.link} to={`${"/dialogs/" + id}`}>
        {name}
      </NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Masha" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Valera" id="4" />
        <DialogItem name="Alexey" id="5" />
        <DialogItem name="Dima" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="How're you doing?" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
