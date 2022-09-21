import React from "react";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  const state = store.getState().profilePage;

  const addPost = () => {
    store.dispatch(addPostCreator());
  };

  const onPostChange = (text) => {
    store.dispatch(updateNewPostCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
