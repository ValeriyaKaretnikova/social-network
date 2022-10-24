import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormControls/FormControls";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.profileData}>
        <div className={s.mainInfo}>
          <div>
            <b>Full name: </b>
            <Field
              name={"fullName"}
              placeholder={"Full name"}
              component={Input}
            ></Field>
          </div>

          <div>
            <b>Looking for a job? </b>
            <Field
              name={"lookingForAJob"}
              placeholder={""}
              component={Input}
              type={"checkbox"}
            ></Field>
          </div>

          <div>
            <b>My professional skills: </b>
            <Field
              name={"lookingForAJobDescription"}
              placeholder={"My professional skills"}
              component={Textarea}
            ></Field>
          </div>

          <div className={s.about}>
            <b>About me: </b>
            <Field
              name={"aboutMe"}
              placeholder={"About me"}
              component={Textarea}
            ></Field>
          </div>

          <div className={s.photoLoader}>
            <button onClick={() => {}}>Save</button>
          </div>
        </div>
        <div className={s.c}>
          <b>Contacts: </b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div className={s.contact} key={key}>
                <Field
                  placeholder={key}
                  name={"contacts." + key}
                  component={Input}
                ></Field>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "editProfile",
})(ProfileDataForm);

export default ProfileDataReduxForm;
