import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = ({ state, addPost, updatePost }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar data={state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={<Dialogs dialogsData={state.dialogsPage} />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                postsData={state.profilePage}
                addPost={addPost}
                updatePost={updatePost}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
