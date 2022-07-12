import "./App.css";
import React, { Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header";
import Programs from "./components/Programs/Programs";
import Program from "./components/Programs/Program/Program";
import HeaderAuth from "./components/Headers/HeaderAuth";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Loading from "./components/secondary/Loading/Loading";
import Office from "./components/Office/Office";
import NotFound from "./components/secondary/NotFound/NotFound";
import { MainStoreContext } from "./store/mainStore";
import { observer } from "mobx-react-lite";
const Main = React.lazy(() => import("./components/Main/Main"));

const App = observer((props) => {

  const {AuthStore} = useContext(MainStoreContext);
    
  return (
    AuthStore.isLoggedIn ? 

    <div className="App">
      <HeaderAuth />
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<Loading />}><Main /></Suspense>} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<Program />} />
        <Route path="/office/*" element={<Office />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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