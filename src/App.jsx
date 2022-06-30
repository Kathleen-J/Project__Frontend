import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/LoginSignup/Login/Login";
import Signup from "./components/LoginSignup/Signup/Signup";
import Loading from "./components/Loading/Loading";
import Office from "./components/Office/Office";
const Programs = React.lazy(() => import("./components/Programs/Programs"));
const Program = React.lazy(() => import("./components/Programs/Program/Program"));

const App = (props) => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/programs" element={
              <Suspense fallback={<Loading />}>                
                <Programs />
              </Suspense>
            }
          />
          <Route path='/programs/:id' element={
              <Suspense fallback={<Loading />}>                
                <Program />
              </Suspense>
            }
          />
          <Route path="/office/*" element={<Office />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
  );
};

export default App;