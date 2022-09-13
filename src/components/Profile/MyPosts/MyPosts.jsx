import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <Post message="Hello, world!" likeCounts='0'/>
      <Post message="Hi! This is my first post." likeCounts='25'/>
      <Post message="So excited to learn React!" likeCounts='3'/>
    </div>
  );
};

export default MyPosts;
