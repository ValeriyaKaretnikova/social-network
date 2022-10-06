import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts, addPost }) => {
  const onAddPost = (values) => {
    addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {posts.map((p) => {
          return (
            <Post message={p.message} likeCounts={p.likesCount} key={p.id} />
          );
        })}
      </div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "addNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
