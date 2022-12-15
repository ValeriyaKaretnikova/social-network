import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer.ts";
import { AppStateType } from "../../redux/redux-store";
import { required } from "../../utils/validators/validators.ts";
import { Input } from "../common/FormControls/FormControls.tsx";
import logo from "./../../img/logo5.png";
import s from "./Login.module.css";

type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

// type LoginFormPropertiesTypeKey = keyof LoginFormValuesType;

type LoginFormOwnProps = {
  captchaUrl: string | null;
};
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate replace to={"/profile"} />;
  }
  return (
    <div className={s.formWrapper}>
      <div className={s.heading}>
        <img src={logo} alt="logo" className={s.logo} />
        <h1>LOGIN</h1>
      </div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.field}>
        <Field
          name={"email"}
          placeholder={"Email"}
          component={Input}
          validate={[required]}
        ></Field>
      </div>
      <div className={s.field}>
        <Field
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          component={Input}
          validate={[required]}
        ></Field>
      </div>
      <div className={s.checkbox}>
        <Field name={"rememberMe"} component={Input} type={"checkbox"} />
        <span className={s.rememberMe}>remember me</span>
      </div>
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && (
        <Field
          name="captcha"
          placeholder="Enter symbols"
          component={Input}
          validate={[required]}
        ></Field>
      )}
      {error && <div className={s.error}>{error}</div>}
      <div className={s.button}>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
