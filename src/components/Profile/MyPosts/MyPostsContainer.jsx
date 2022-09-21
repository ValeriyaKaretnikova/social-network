import React from "react";
import {
  addPostCreator,
  updateNewPostCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
