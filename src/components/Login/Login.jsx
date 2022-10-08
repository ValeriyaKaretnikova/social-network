import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";
import logo from "./../../img/logo5.png";
import s from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
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
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
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
      {props.error && <div className={s.error}>{props.error}</div>}
      <div className={s.button}>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
