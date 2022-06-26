import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Programs from "./components/Programs/Programs";
import Login from "./components/LoginSignup/Login/Login";
import Signup from "./components/LoginSignup/Signup/Signup";

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route
            path={"/programs"}
            element={<Programs />}
          />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<Signup />} />
        </Routes>
      </div>
  );
};

export default App;