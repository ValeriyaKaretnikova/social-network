import { v4 as uuidv4 } from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number
  name: string
  image: string
}

type MessageType = {
  id: number
  message: string
}

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
  ] as Array<MessageType>,
  dialogs: [
    {
      id: 1,
      name: "Maria",
      image: "ava1",
    },
    {
      id: 2,
      name: "Sasha",
      image: "ava2",
    },
    {
      id: 3,
      name: "Sarah",
      image: "ava4",
    },
    {
      id: 4,
      name: "William",
      image: "ava3",
    },
    {
      id: 5,
      name: "Anna",
      image: "ava5",
    },
    {
      id: 6,
      name: "David",
      image: "ava6",
    },
  ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const body = action.newMessageBody;
      const newMessage = {
        id: uuidv4(),
        message: body,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody : string) : SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
