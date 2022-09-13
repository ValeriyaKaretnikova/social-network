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
      <Post message="Hello, world!"/>
      <Post message="Hi! This is my first post."/>
      <Post message="So excited to learn React!"/>
    </div>
  );
};

export default MyPosts;
