import React, { Component, Suspense } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login.tsx";
import Navbar from "./components/Navbar/Navbar";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/app-reducer.ts";
import store from "./redux/redux-store.ts";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer.tsx")
);

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            />

            <Route
              path="/profile"
              element={
                <Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>
              }
            >
              <Route
                path=":userId"
                element={
                  <Suspense fallback={<Preloader />}>
                    <ProfileContainer />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="/dialogs"
              element={
                <Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </Suspense>
              }
            />

            <Route
              path="/users"
              element={
                <Suspense fallback={<Preloader />}>
                  <UsersContainer />
                </Suspense>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <div className="">
                  <h2>404 Page not found</h2>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
