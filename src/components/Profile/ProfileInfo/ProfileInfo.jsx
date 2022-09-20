import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.background}></div>
      <div className={s.description}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
