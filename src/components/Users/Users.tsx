import React from 'react';
import { UserType } from '../../types/types';
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User.tsx";
import s from "./Users.module.css";

type PropsType = {
  currentPage: number
  onPageChanged:(pageNumber: number) => void
  totalCount: number
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: () => void
  unfollow: () => void
}

const Users : React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalCount,
  pageSize,
  users,
  followingInProgress,
  follow,
  unfollow,
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
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default Users;
