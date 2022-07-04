import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import css from './Office.module.css';
import SideBar from "./SideBar/SideBar";
import Profile from "./Content/Profile/Profile";
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
const EditPrograms = React.lazy(() => import('./Content/AdminPage/EditPrograms/EditPrograms'));
const Students = React.lazy(() => import('./Content/AdminPage/Students/Students'));
const Curators = React.lazy(() => import('./Content/AdminPage/Curators/Curators'));
// const Profile = React.lazy(() => import('./Content/Profile/Profile'));


const Office = () => {
    return (
    <div className={css.content_block}>
        <div className={css.content}>
          <Routes>

            {/* all users*/}
            <Route exact='true' path="/profile" element={<Profile />} />

            {/* students */}
            {/* <Route path={"/my-programs"} element={<MyPrograms />} /> */}

            {/* admin */}
            <Route path="/students" element={<Suspense fallback={<Loading />}> <Students /> </Suspense>}/>
            <Route path="/edit-programs" element={<Suspense fallback={<Loading />}> <EditPrograms /> </Suspense>}/>
            <Route path="/curators" element={<Suspense fallback={<Loading />}> <Curators /> </Suspense>}/>

            {/* curator */}
            {/* <Route path={"/my-students"} element={<MyStudents />} /> */}

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
        <div className={css.side_bar}>
          <SideBar />
        </div>
    </div>
    )
}

export default Office;