import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ postsData, dispatch }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        postsData={postsData.posts}
        newPostText={postsData.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
