import s from "./Post.module.css";

const Post = ({message}) => {
  return (
    <div className={s.item}>
      <img src={require("../../../../img/avatar.jpg")} alt="avatar" />
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
