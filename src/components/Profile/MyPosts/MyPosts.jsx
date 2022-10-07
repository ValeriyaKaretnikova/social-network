import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength30 = maxLengthCreator(30);

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
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength30]}
          placeholder="Post message"
        />
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
