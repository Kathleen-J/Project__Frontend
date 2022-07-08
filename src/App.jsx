import "./App.css";
import React, { Suspense, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderAuth from "./components/HeaderAuth/HeaderAuth";
import Main from "./components/Main/Main";
import Login from "./components/LoginSignup/Login/Login";
import Signup from "./components/LoginSignup/Signup/Signup";
import Loading from "./components/Loading/Loading";
import Office from "./components/Office/Office";
import NotFound from "./components/NotFound/NotFound";
import { MainStoreContext } from "./store/mainStore";
import { observer } from "mobx-react-lite";
const Programs = React.lazy(() => import("./components/Programs/Programs"));
const Program = React.lazy(() => import("./components/Programs/Program/Program"));

const App = observer((props) => {

  const {AuthStore} = useContext(MainStoreContext);
  
  // useEffect(() => {
  //   AuthStore.getToken('Kathleen', '123');
  // }, [])
  
  return (
    AuthStore.isLoggedIn ? 

      <div className="App">
        <HeaderAuth />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    :

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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>

  );
});

export default App;