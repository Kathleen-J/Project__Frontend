import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.navbar}>
        <div className={css.logotype}>
          <a href="/" className={css.logo}>
            SkillFox
          </a>
        </div>
        <a href="/programs" className={css.choose__program}>
          ВЫБРАТЬ ПРОГРАММУ
        </a>
        <div className={css.login_singin}>
          <a href="/login" className={css.logIn}>
            Log In
          </a>
          <a href="#/signup" className={css.singUp}>
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Header;