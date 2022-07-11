import React, { Suspense, useContext, useEffect, useState } from 'react';
import { MainStoreContext } from "../../store/mainStore";
import { Routes, Route } from "react-router-dom";
import css from './Office.module.css';
import SideBar from "./SideBar/SideBar";
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import { observer } from 'mobx-react-lite';
const EditPrograms = React.lazy(() => import('./Content/AdminPage/EditPrograms/EditPrograms'));
const Students = React.lazy(() => import('./Content/AdminPage/Students/Students'));
const Curators = React.lazy(() => import('./Content/AdminPage/Curators/Curators'));
const MyPrograms = React.lazy(() => import('./Content/StudentPage/MyPrograms'));
const Profile = React.lazy(() => import('./Content/Profile/Profile'));
const MyStudents = React.lazy(() => import('./Content/CuratorPage/MyStudents'));


const Office = observer(() => {
  const {AuthStore} = useContext(MainStoreContext);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    (async() => {

      if(AuthStore.token.length) {
        await AuthStore.decodeData();
        await setStatus(true);
      }
      
    })();
  }, []);
  
  return (
    status &&
    <div className={css.content_block}>
      {
        AuthStore.roleUser === 'student' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path={"/my-programs"} element={<Suspense fallback={<Loading />}> <MyPrograms /> </Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }
      {
         AuthStore.roleUser === 'curator' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path={"/my-students"} element={<Suspense fallback={<Loading />}> <MyStudents /> </Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      }
      {
         AuthStore.roleUser === 'admin' &&
        <div className={css.content}>
          <Routes>
            <Route exact='true' path="/profile" element={<Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
            <Route path="/students" element={<Suspense fallback={<Loading />}> <Students /> </Suspense>}/>
            <Route path="/edit-programs" element={<Suspense fallback={<Loading />}> <EditPrograms /> </Suspense>}/>
            <Route path="/curators" element={<Suspense fallback={<Loading />}> <Curators /> </Suspense>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
       </div>
      }
        <div className={css.side_bar}>
          <SideBar />
        </div>
    </div>
    )
})

export default Office;