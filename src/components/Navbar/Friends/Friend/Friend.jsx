import s from "./../Friends.module.css";

const Friend = ({ friend }) => {
  return (
    <div className={s.friend}>
      <img
        src={require("../../../../img/" + friend.picture + ".jpg")}
        alt="avatar"
      />
      <div>{friend.name}</div>
    </div>
  );
};

export default Friend;
