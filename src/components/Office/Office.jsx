import React, { Suspense, useContext, useEffect, useState } from 'react';
import { MainStoreContext } from "../../store/mainStore";
import { Routes, Route } from "react-router-dom";
import css from './Office.module.css';
import SideBar from "./SideBar/SideBar";
import EditPrograms from "./Content/AdminPage/EditPrograms/EditPrograms";
import Students from "./Content/AdminPage/Students/Students";
import Curators from "./Content/AdminPage/Curators/Curators";
import MyPrograms from "./Content/StudentPage/MyPrograms";
import Profile from "./Content/Profile/Profile";
import MyStudents from "./Content/CuratorPage/MyStudents";
import Chat from "./Content/Chat/Chat";
import Loading from '../secondary/Loading/Loading';
import NotFound from '../secondary/NotFound/NotFound';
import { observer } from 'mobx-react-lite';
import DeletedPage from '../secondary/DeletedPage/DeletedPage';


const Office = observer(() => {
  const {AuthStore, UsersStore} = useContext(MainStoreContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    (async() => {

      if(AuthStore.token.length) {
        await AuthStore.decodeData();
        await UsersStore.getStatusUser();
        await setStatus(true);
      }
      
    })();
  }, []);
  
  if(UsersStore.statusUser === 'active'){
  return (
    status &&
    <div className={css.content_block}>
      {
        AuthStore.roleUser === 'student' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path="/my-programs" element={<MyPrograms />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }
      {
         AuthStore.roleUser === 'curator' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path="/my-students" element={<MyStudents />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }
      {
         AuthStore.roleUser === 'admin' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path="/my-programs" element={<MyPrograms />} />
            <Route path="/students" element={<Students />} />
            <Route path="/edit-programs" element={<EditPrograms />} />
            <Route path="/curators" element={<Curators />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       </div>
      }
        <div className={css.side_bar}>
          <SideBar />
        </div>
    </div>
  )}
   
  if(UsersStore.statusUser === 'deleted'){
  return (
    <DeletedPage />
  )}
  
})

export default Office;