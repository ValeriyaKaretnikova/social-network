import * as axios from "axios";
import userPhoto from "./../../img/user.jpg";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div className={s.wrapper}>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={s.user}>
            <div className={s.userPhoto}>
              <div>
                <img
                  src={
                    user.photos.small != null
                      ? user.photos.small != null
                      : userPhoto
                  }
                  alt="user avatar"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
      })}
    </div>
  );
};

export default Users;
