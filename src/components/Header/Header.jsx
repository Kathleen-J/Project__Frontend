import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.navbar}>
      <Link to="/" className={css.logo}>
        SkillFox
      </Link>
      <Link to="/programs" className={css.choose__program}>
        ВЫБРАТЬ ПРОГРАММУ
      </Link>
      <div>
        <Link to="/login" className={css.logIn}>
          Log In
        </Link>
        <Link to="/signup" className={css.singUp}>
          Sign Up
        </Link>
      </div>
    </header>
  );
};
export default Header;
