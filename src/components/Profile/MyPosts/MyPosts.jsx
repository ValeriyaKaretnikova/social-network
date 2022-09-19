import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData, addPost, newPostText, updatePost }) => {
  const newPostElement = React.createRef();

  const add = () => {
    addPost();
  };

  const onPostChange = () => {
    updatePost(newPostElement.current.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={add}>Add post</button>
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
