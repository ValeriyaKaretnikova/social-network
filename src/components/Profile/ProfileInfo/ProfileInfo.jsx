import Preloader from "../../common/Preloader/Preloader";
import background from "./../../../img/sunback.jpg";
import userPhoto from "./../../../img/user.jpg";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={s.background}>
        <img src={background} alt="background" />
      </div>
      <div className={s.description}>
        <div>
          <img
            src={
              profile.photos.large != null ? profile.photos.large : userPhoto
            }
            alt="avatar"
          />
        </div>
        <div>
          <div className={s.name}>{profile.fullName}</div>
          <div className={s.about}>{profile.aboutMe}</div>
          <div className={s.photoLoader}>
            {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
          </div>
        </div>
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
