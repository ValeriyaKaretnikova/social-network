import Preloader from "../../common/Preloader/Preloader";
import background from "./../../../img/sunback.jpg";
import userPhoto from "./../../../img/user.jpg";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.background}>
        <img src={background} alt="background" />
      </div>
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
        </div>
        <div>
          <div className={s.name}>{props.profile.fullName}</div>
          <div className={s.about}>{props.profile.aboutMe}</div>
        </div>
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
