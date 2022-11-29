import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow
} from "../../redux/users-reducer.ts";
import { UserType } from "../../types/types";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users.tsx";

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers:(currentPage: number, pageSize: number) => void
  setCurrentPage:(pageNumber: number) => void
  toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
