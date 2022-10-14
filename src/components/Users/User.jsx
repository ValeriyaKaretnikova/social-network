import { NavLink } from "react-router-dom";
import userPhoto from "./../../img/user.jpg";
import s from "./Users.module.css";

const User = ({ user, follow, unfollow, followingInProgress, ...props }) => {
  return (
    <div className={s.user}>
      <div className={s.userPhoto}>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="user avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div className={s.userInfo}>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>country</div>
          <div>city</div>
        </span>
      </div>
    </div>
  );
};

export default User;
