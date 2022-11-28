import { PostType } from './../types/types';
import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

const state = {
  posts: [
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
  ] as Array<PostType>,
  newPostText: "",
  profile: null,
  status: "",
};



it("length of posts should be incremented", () => {
  let action= addPostCreator("it-kamasutra.com");
  let newState= profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  let action= addPostCreator("it-kamasutra.com");
  let newState= profileReducer(state, action);

  expect(newState.posts[3].message).toBe("it-kamasutra.com");
});

it("after deleting length of posts should be decremented", () => {
  let action= deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
