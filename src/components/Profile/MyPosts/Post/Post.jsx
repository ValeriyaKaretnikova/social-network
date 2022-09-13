import s from "./Post.module.css";

const Post = ({message, likeCounts}) => {
  return (
    <div className={s.item}>
      <img src={require("../../../../img/avatar.jpg")} alt="avatar" />
      {message}
      <div>
        <span>like</span> {likeCounts}
      </div>
    </div>
  );
};

export default Post;
