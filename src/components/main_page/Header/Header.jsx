import css from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={css.navbar}>
      <Link to="/" className={css.logo}>SkillFox</Link>
      <Link to="/programs" className={css.choose__program}>ВЫБРАТЬ ПРОГРАММУ</Link>
      <div>        
        <Link to="/login" className={css.logIn}>Log In</Link>
        <Link to="#/signup" className={css.singUp}>Sign Up</Link>
      </div>
    </nav>
  );
};
export default Header;
