import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    // unAuthrized
    
    // <header className={css.navbar}>
    //   <Link to="/" className={css.logo} onClick={() => {window.scrollTo(0, 0)}}>
    //     SkillFox
    //   </Link>
    //   <Link to="/programs" className={css.choose__program} onClick={() => {window.scrollTo(0, 0)}}>
    //     ВЫБРАТЬ ПРОГРАММУ
    //   </Link>
    //   <div>
    //     <Link to="/login" className={css.logIn}>
    //       Log In
    //     </Link>
    //     <Link to="/signup" className={css.singUp}>
    //       Sign Up
    //     </Link>
    //   </div>
    // </header>

    //authorized

    <header className={css.navbar}>
    <Link to="/" className={css.logo} onClick={() => {window.scrollTo(0, 0)}}>
      SkillFox
    </Link>
    <Link to="/programs" className={css.choose__program} onClick={() => {window.scrollTo(0, 0)}}>
      ВЫБРАТЬ ПРОГРАММУ
    </Link>
    <Link to="/office/profile" className={css.to_profile} onClick={() => {window.scrollTo(0, 0)}}>
      ЛИЧНЫЙ КАБИНЕТ
    </Link>
      <button className={css.singOut}>
        Sign Out
      </button>
  </header>
  
  );
};
export default Header;
