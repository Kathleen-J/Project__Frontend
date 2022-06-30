import css from './Office.module.css';
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Profile from "./Content/CommonComponents/Profile/Profile";
import EditPrograms from './Content/AdminPage/EditPrograms/EditPrograms';


const Office = () => {
    return (
    <div className={css.content_block}>
        <div className={css.content}>
          <Routes>

            {/* all users*/}
            <Route path="/" element={<Profile />} />
            {/* <Route path={"/my-programs"} element={<MyPrograms />} /> */}

            {/* admin */}
            {/* <Route path={"/students"} element={<Students />} /> */}
            {/* <Route path={"/curators"} element={<Curators />} /> */}
            <Route path={"/edit-programs"} element={<EditPrograms />} />

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