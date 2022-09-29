import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../img/user.jpg";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.background}></div>
      <div className={s.description}>
        <div>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
            alt="avatar"
          />
          <div className={s.name}>{props.profile.fullName}</div>
        </div>
        <div className={s.about}>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
