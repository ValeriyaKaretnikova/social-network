import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsData, updateNewMessage, sendMessage, isAuth }) => {
  const dialogs = dialogsData.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} image={d.image} key={d.id} />;
  });

  const messages = dialogsData.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  const newMessageText = dialogsData.newMessageText;
  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = (e) => {
    const text = e.target.value;
    updateNewMessage(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>
        <div>{messages}</div>
        <div className={s.newMessageArea}>
          <div>
            <textarea
              value={newMessageText}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
