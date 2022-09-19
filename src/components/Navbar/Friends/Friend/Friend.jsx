import s from "./../Friends.module.css";

const Friend = ({ friend }) => {
  return (
    <div className={s.friend}>
      <img src={require("../../../../img/ava1.jpg")} alt="avatar" />
      <div>{friend.name}</div>
    </div>
  );
};

export default Friend;
