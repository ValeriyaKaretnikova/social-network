import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      message: "Hello, world!",
      likesCount: 0,
    },
    {
      id: 2,
      message: "Hi! This is my first post.",
      likesCount: 25,
    },
    {
      id: 3,
      message: "So excited to learn React!",
      likesCount: 3,
    },
  ];

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
        {postsData.map((p) => {
          return <Post message={p.message} likeCounts={p.likesCount} />;
        })}
      </div>
    </div>
  );
};

export default MyPosts;
