import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src={require("../../img/background.jpg")} alt="background car" />
      </div>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
