import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  currentPage,
  onPageChanged,
  totalCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div className={s.wrapper}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalCount}
        pageSize={pageSize}
      />

      {users.map((user) => {
        return (
          <User
            user={user}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default Users;
