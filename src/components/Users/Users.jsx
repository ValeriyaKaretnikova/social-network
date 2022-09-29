import { NavLink } from "react-router-dom";
import userPhoto from "./../../img/user.jpg";
import s from "./Users.module.css";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selected : undefined}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={s.user}>
            <div className={s.userPhoto}>
              <div>
                <NavLink to={"/profile/" + user.id}>
                  <img
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="user avatar"
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
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
