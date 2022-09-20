import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData, newPostText, dispatch }) => {
  const newPostElement = React.createRef();

  const addPost = () => {
    dispatch({ type: "ADD-POST" });
  };

  const onPostChange = () => {
    dispatch({
      type: "UPDATE-NEW-POST-TEXT",
      newText: newPostElement.current.value,
    });
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
          <button onClick={addPost}>Add post</button>
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
