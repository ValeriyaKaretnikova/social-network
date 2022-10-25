import { stopSubmit } from "redux-form";
import { v4 as uuidv4 } from "uuid";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO = "SET_PHOTO ";

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
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: uuidv4(),
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUser = (userId) => async (dispatch) => {
  const response = await profileAPI.getUser(userId);
  dispatch(setUserProfile(response));
};

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos) => ({
  type: SET_PHOTO,
  photos,
});

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export default profileReducer;
