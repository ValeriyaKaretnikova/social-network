import { stopSubmit } from "redux-form";
import { v4 as uuidv4 } from "uuid";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO = "SET_PHOTO ";

type PostType = {
  id: number
  message: string
  likesCount: number
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotosType = {
  small: string | null
  large: string | null
}

type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

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
  ] as Array<PostType>,
  newPostText: "",
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any) : InitialStateType=> {
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

type AddPostCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostCreator = (newPostText: string) : AddPostCreatorActionType=> ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType) : SetUserProfileActionType=> ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string) : SetStatusActionType=> ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SET_PHOTO
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType) : SavePhotoSuccessActionType => ({
  type: SET_PHOTO,
  photos,
});

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId : number) : DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

export const getUser = (userId : number) => async (dispatch: any) => {
  const response = await profileAPI.getUser(userId);
  dispatch(setUserProfile(response));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    alert(error.message);
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(userId));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
};


export default profileReducer;
