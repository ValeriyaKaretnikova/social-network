import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  let state = store.getState().dialogsPage;

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (text) => {
    store.dispatch(updateNewMessageCreator(text));
  };

  return (
    <Dialogs
      updateNewMessage={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsData={state}
    />
  );
};

export default DialogsContainer;
