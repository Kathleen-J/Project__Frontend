import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { MainStoreContext } from "../../store/mainStore";
import { useContext, useEffect } from "react";

const Header = () => {
  const {AuthStore, curatorsDisciplinesStore, ProgramsStore, studentsProgramsStore, UsersStore, ChatStore} = useContext(MainStoreContext);
  
  useEffect(() => {
    (async() => {

      if(AuthStore.isLoggedIn) {
        await AuthStore.decodeData();
        await UsersStore.getStatusUser();
      }
      
    })();
  }, []);

  return (
  AuthStore.isLoggedIn ? 
  
  <div>
    {
      (AuthStore.roleUser === 'student' || AuthStore.roleUser === 'admin') &&
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
            window.scrollTo(0, 0)
        }}>Sign Out</Link>
      </header>
    }
    {
      AuthStore.roleUser === 'curator' &&
      <header className={css.navbar}>
        <Link to="/" className={css.logo} onClick={() => {window.scrollTo(0, 0)}}>SkillFox</Link>
        <Link to="/office/profile" className={css.to_profile} onClick={() => {window.scrollTo(0, 0)}}>ЛИЧНЫЙ КАБИНЕТ</Link>
        <Link to='/' className={css.singOut} onClick={() => {
            AuthStore.logOut()
            curatorsDisciplinesStore.cleanStore()
            ProgramsStore.cleanStore()
            studentsProgramsStore.cleanStore()
            UsersStore.cleanStore()
            window.scrollTo(0, 0)
        }}>Sign Out</Link>
      </header>
    }
  </div>
  :
  <header className={css.navbar}>
    <Link to="/" className={css.logo} onClick={() => {window.scrollTo(0, 0)}}>SkillFox</Link>
    <Link to="/programs" className={css.choose__program} onClick={() => {window.scrollTo(0, 0)}}>ВЫБРАТЬ ПРОГРАММУ</Link>
    <div>
      <Link to="/login" className={css.logIn}>Log In</Link>
      <Link to="/signup" className={css.singUp}>Sign Up</Link>
    </div>
  </header>

  
  );
};
export default Header;
