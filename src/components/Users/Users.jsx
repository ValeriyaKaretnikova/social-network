import * as axios from "axios";
import React from "react";
import userPhoto from "./../../img/user.jpg";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={s.wrapper}>
        <div className={s.pages}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && s.selected}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => {
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
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
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
  }
}

export default Users;
