import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = ({ store }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar data={store.getState().sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer store={store} />} />
          <Route path="/profile" element={<Profile store={store} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
