import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ postsData, addPost, updatePost }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        postsData={postsData.posts}
        addPost={addPost}
        newPostText={postsData.newPostText}
        updatePost={updatePost}
      />
    </div>
  );
};

export default Profile;
