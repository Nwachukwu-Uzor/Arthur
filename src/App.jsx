import { Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./Pages/Home/Home";
import LinkPage from "./Pages/LinkPage/LinkPage";
import MainPage from "./Pages/MainPage/MainPage";
import Receiver from "./Pages/Receiver/Receiver";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/receiver" element={<Receiver />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
