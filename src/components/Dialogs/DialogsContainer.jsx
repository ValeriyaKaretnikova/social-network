import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
