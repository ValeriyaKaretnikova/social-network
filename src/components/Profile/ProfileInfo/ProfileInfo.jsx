import { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import background from "./../../../img/sunback.jpg";
import userPhoto from "./../../../img/user.jpg";
import ProfileDataForm from "./ProfileDataForm";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSaveProfile = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div>
      <div className={s.background}>
        <img src={background} alt="background" />
      </div>
      <div className={s.description}>
        <div className={s.avatar}>
          <img
            src={
              profile.photos.large != null ? profile.photos.large : userPhoto
            }
            alt="avatar"
          />
          {isOwner ? (
            <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
            />
          ) : (
            <div className={s.status}>{status}</div>
          )}
        </div>

        {editMode ? (
          <ProfileDataForm
            isOwner={isOwner}
            onPhotoSelected={onPhotoSelected}
            onSubmit={onSaveProfile}
            initialValues={profile}
            profile={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            onPhotoSelected={onPhotoSelected}
            goToEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, onPhotoSelected, goToEditMode }) => {
  return (
    <div className={s.profileData}>
      <div className={s.mainInfo}>
        <div className={s.name}>{profile.fullName}</div>
        <div>
          <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>My skills: </b> {profile.lookingForAJobDescription}
          </div>
        )}
        <div className={s.about}>
          <b>About me: </b> {profile.aboutMe ?? "*****"}
        </div>

        <div className={s.photoLoader}>
          {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
        </div>
        <div className={s.photoLoader}>
          {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
      </div>

      <div className={s.contacts}>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
