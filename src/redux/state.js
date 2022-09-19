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
      ],
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Masha",
          picture: "ava1.jpg",
        },
        {
          id: 2,
          name: "Sasha",
          picture: "ava2.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          picture: "ava3.jpg",
        },
        {
          id: 4,
          name: "Viktor",
          picture: "ava4.jpg",
        },
        {
          id: 5,
          name: "Irina",
          picture: "ava5.jpg",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
