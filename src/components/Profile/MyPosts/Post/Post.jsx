import s from "./Post.module.css";

const Post = ({ message, likeCounts }) => {
  return (
    <div className={s.item}>
      <div className={s.message}>
        <img src={require("../../../../img/back.jpg")} alt="avatar" />
        <div className={s.text}>{message}</div>
      </div>

      <div>
        <span>❤️</span> {likeCounts}
      </div>
    </div>
  );
};

export default Post;
