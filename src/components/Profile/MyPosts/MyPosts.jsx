import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hello, world!" likeCounts="0" />
        <Post message="Hi! This is my first post." likeCounts="25" />
        <Post message="So excited to learn React!" likeCounts="3" />
      </div>
    </div>
  );
};

export default MyPosts;
