import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src={require("../../../img/background.jpg")}
          alt="background car"
        />
      </div>
      <div className={s.description}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
