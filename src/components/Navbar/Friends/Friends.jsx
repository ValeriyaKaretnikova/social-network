import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = ({ data }) => {
  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div className={s.wrapper}>
        {data.friends.map((friend) => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
