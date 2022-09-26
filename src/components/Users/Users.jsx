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
              className={props.currentPage === p && s.selected}
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
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
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
