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
  let dialogsData = [
    {
      id: 1,
      name: "Masha",
    },
    {
      id: 2,
      name: "Sasha",
    },
    {
      id: 3,
      name: "Sveta",
    },
    {
      id: 4,
      name: "Valera",
    },
    {
      id: 5,
      name: "Alexey",
    },
    {
      id: 6,
      name: "Dima",
    },
  ];

  let messagesData = [
    {
      id: 1,
      message: "Hi!",
    },
    {
      id: 2,
      message: "How're you doing?",
    },
    {
      id: 3,
      message: "Yo!",
    },
    {
      id: 4,
      message: "Yo!",
    },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map((d) => {
          return <DialogItem name={d.name} id={d.id} />;
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map((m) => {
          return <Message message={m.message} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
