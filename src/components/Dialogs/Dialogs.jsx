import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.dialogs.map((d) => {
          return <DialogItem name={d.name} id={d.id} />;
        })}
      </div>
      <div className={s.messages}>
        {dialogsData.messages.map((m) => {
          return <Message message={m.message} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
