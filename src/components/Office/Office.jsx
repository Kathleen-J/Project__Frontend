import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import css from './Office.module.css';
import SideBar from "./SideBar/SideBar";
import Profile from "./Content/Profile/Profile";
import Students from './Content/AdminPage/Students/Students';
import Curators from './Content/AdminPage/Curators/Curators';
import Loading from '../Loading/Loading';
const EditPrograms = React.lazy(() => import('./Content/AdminPage/EditPrograms/EditPrograms'));
// const Students = React.lazy(() => import('./Content/AdminPage/Students/Students'));
// const Curators = React.lazy(() => import('./Content/AdminPage/Curators/Curators'));
// const Profile = React.lazy(() => import('./Content/Profile/Profile'));


const Office = () => {
    return (
    <div className={css.content_block}>
        <div className={css.content}>
          <Routes>

            {/* all users*/}
            <Route path="/" element={<Profile />} />

            {/* students */}
            {/* <Route path={"/my-programs"} element={<MyPrograms />} /> */}

            {/* admin */}
            <Route path={"/students"} element={<Students />} />
            <Route path="/edit-programs" element={<Suspense fallback={<Loading />}> <EditPrograms /> </Suspense>}/>
            <Route path={"/curators"} element={<Curators />} />

            {/* curator */}
            {/* <Route path={"/my-students"} element={<MyStudents />} /> */}

          </Routes>
        </div>
        <div className={css.side_bar}>
          <SideBar />
        </div>
    </div>
    )
}

export default Office;