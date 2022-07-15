import "./App.css";
import React, { Suspense, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import Program from "./components/Programs/Program/Program";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Loading from "./components/secondary/Loading/Loading";
import Office from "./components/Office/Office";
import NotFound from "./components/secondary/NotFound/NotFound";
import { MainStoreContext } from "./store/mainStore";
import { observer } from "mobx-react-lite";
const Main = React.lazy(() => import("./components/Main/Main"));

const App = observer(() => {

  const {AuthStore} = useContext(MainStoreContext);

  useEffect(() => {
    (async() => {

      if(AuthStore.isLoggedIn) {
        await AuthStore.decodeData();
      }
      
    })();
  }, []);
    
  return (
    AuthStore.isLoggedIn ? 

    <div>
      {
        (AuthStore.roleUser === 'student' || AuthStore.roleUser === 'admin') &&
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Suspense fallback={<Loading />}><Main /></Suspense>} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:id" element={<Program />} />
            <Route path="/office/*" element={<Office />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }

      {
        AuthStore.roleUser === 'curator' &&
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Suspense fallback={<Loading />}><Main /></Suspense>} />
            <Route path="/office/*" element={<Office />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }
    </div>

    :

    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<Loading />}><Main /></Suspense>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<Program />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
});

export default App;