import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";


const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

// type InitialStateType2 = {
//   userId: number | null
//   email: string | null
//   login: string | null
//   isAuth: boolean
//   captchaUrl: string | null
// }

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false ,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action : any) : InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth : boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) : SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string }

}
export const getCaptchaUrlSuccess = (captchaUrl : string) : GetCaptchaUrlSuccessActionType=> ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const authMe = () => async (dispatch: any) => {
  let response = await authAPI.authorizeMe();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(authMe());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }

      let message =
        response.messages.length > 0 ? response.messages[0] : "Unknown error";
      dispatch(
        stopSubmit("login", {
          _error: message,
        })
      );
    }
  };
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch : any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};
export default authReducer;
