import React from 'react';
import { NavLink } from "react-router-dom";
import { UserType } from '../../types/types';
import userPhoto from "./../../img/user.jpg";
import s from "./Users.module.css";


type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, follow, unfollow, followingInProgress, ...props }) => {
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
          <div className={s.name}>{user.name}</div>
        </span>
        <span>
          <div className={s.status}>{user.status}</div>
        </span>
      </div>
    </div>
  );
};

export default User;
