import { Field, reduxForm } from "redux-form";
import logo from "./../../img/logo5.png";
import s from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
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
        <Field name={"login"} placeholder={"Login"} component={"input"}></Field>
      </div>
      <div className={s.field}>
        <Field
          name={"password"}
          placeholder={"Password"}
          component={"input"}
        ></Field>
      </div>
      <div className={s.checkbox}>
        <Field name={"rememberMe"} component={"input"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div className={s.button}>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;
