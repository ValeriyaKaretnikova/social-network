import { v4 as uuidv4 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: uuidv4(),
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
