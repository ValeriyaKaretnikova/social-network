import { v4 as uuidv4 } from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: uuidv4(),
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
