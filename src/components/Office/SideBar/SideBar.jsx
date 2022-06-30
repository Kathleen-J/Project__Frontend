import css from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={css.side_bar_block}>
      <div className={css.nav}>

        {/* all users */}
        <Link to="/office" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Профиль</Link>
        <Link to="/office/my-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои программы</Link>

        {/* curator */}
        <Link to="/office/my-students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои студенты</Link>

        {/* admin */}
        <Link to="/office/students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Студенты</Link>
        <Link to="/office/curators" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Кураторы</Link>
        <Link to="/office/edit-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Все программы</Link>
      </div>
    </div>
  );
};
export default SideBar;