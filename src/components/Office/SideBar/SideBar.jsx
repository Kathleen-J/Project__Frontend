import css from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={css.side_bar_block}>
      <div className={css.nav}>

        {/* all users */}
        <NavLink to="/office/profile" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Профиль</NavLink>
        <NavLink to="/office/my-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои программы</NavLink>

        {/* curator */}
        <NavLink to="/office/my-students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои студенты</NavLink>

        {/* admin */}
        <NavLink to="/office/students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Студенты</NavLink>
        <NavLink to="/office/curators" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Кураторы</NavLink>
        <NavLink to="/office/edit-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Все программы</NavLink>
      </div>
    </div>
  );
};
export default SideBar;