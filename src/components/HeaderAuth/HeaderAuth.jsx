import css from "../Header/Header.module.css";
import React, { useContext } from "react";
import { MainStoreContext } from "../../store/mainStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const HeaderAuth = observer(() => {
  const {AuthStore, curatorsDisciplinesStore, ProgramsStore, studentsProgramsStore, UsersStore} = useContext(MainStoreContext);

  return (
    <header className={css.navbar}>
        <Link to="/" className={css.logo} onClick={() => {window.scrollTo(0, 0)}}>SkillFox</Link>
        <Link to="/programs" className={css.choose__program} onClick={() => {window.scrollTo(0, 0)}}>ВЫБРАТЬ ПРОГРАММУ</Link>
        <Link to="/office/profile" className={css.to_profile} onClick={() => {window.scrollTo(0, 0)}}>ЛИЧНЫЙ КАБИНЕТ</Link>
        <Link to='/' className={css.singOut} onClick={() => {
          AuthStore.logOut()
          curatorsDisciplinesStore.cleanStore()
          ProgramsStore.cleanStore()
          studentsProgramsStore.cleanStore()
          UsersStore.cleanStore()
        }}>Sign Out</Link>
    </header>
  
  );
});
export default HeaderAuth;
