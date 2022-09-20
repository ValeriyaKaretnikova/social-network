import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Hello, world!",
          likesCount: 0,
        },
        {
          id: 2,
          message: "Hi! This is my first post.",
          likesCount: 25,
        },
        {
          id: 3,
          message: "So excited to learn React!",
          likesCount: 3,
        },
      ],
      newPostText: "IT Kamasutra",
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Masha",
          picture: "ava1",
        },
        {
          id: 2,
          name: "Sasha",
          picture: "ava2",
        },
        {
          id: 3,
          name: "Sveta",
          picture: "ava4",
        },
        {
          id: 4,
          name: "Viktor",
          picture: "ava7",
        },
        {
          id: 5,
          name: "Irina",
          picture: "ava8",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
