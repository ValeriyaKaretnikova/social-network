import { v4 as uuidv4 } from "uuid";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  messages: [
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
  ],
  dialogs: [
    {
      id: 1,
      name: "Masha",
      image: "ava1",
    },
    {
      id: 2,
      name: "Sasha",
      image: "ava2",
    },
    {
      id: 3,
      name: "Sveta",
      image: "ava4",
    },
    {
      id: 4,
      name: "Valera",
      image: "ava3",
    },
    {
      id: 5,
      name: "Alena",
      image: "ava5",
    },
    {
      id: 6,
      name: "Dima",
      image: "ava6",
    },
  ],
  newMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageText;
      state.newMessageText = "";
      const newMessage = {
        id: uuidv4(),
        message: body,
      };
      state.messages.push(newMessage);
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
