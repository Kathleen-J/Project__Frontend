import css from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { MainStoreContext } from "../../../store/mainStore";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

const SideBar = observer(() => {
  const {AuthStore} = useContext(MainStoreContext);
  
  useEffect(() => {
    (async() => {

      if(AuthStore.token.length) {
        await AuthStore.decodeData();
      }
      
    })();
  }, []);

  return (
    <div className={css.side_bar_block}>
      {
        AuthStore.roleUser === 'student' &&
        <div className={css.nav}>
          <NavLink to="/office/profile" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Профиль</NavLink>
          <NavLink to="/office/my-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои программы</NavLink>
        </div>
      }
      {
        AuthStore.roleUser === 'curator' &&
        <div className={css.nav}>
          <NavLink to="/office/profile" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Профиль</NavLink>
          <NavLink to="/office/my-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои программы</NavLink>
          <NavLink to="/office/my-students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои студенты</NavLink>
        </div>
      }
      {
        AuthStore.roleUser === 'admin' &&
        <div className={css.nav}>
          <NavLink to="/office/profile" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Профиль</NavLink>
          <NavLink to="/office/my-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Мои программы</NavLink>
          <NavLink to="/office/students" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Студенты</NavLink>
          <NavLink to="/office/curators" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Кураторы</NavLink>
          <NavLink to="/office/edit-programs" className={css.link} onClick={() => {window.scrollTo(0, 0)}}>Все программы</NavLink>
        </div>
      }
    </div>
  );
});
export default SideBar;