import style from "./Signup.module.css";
import css from "../Login_Signup.module.css";

const Login = () => {
  return (
    <div className={"modalWindow"}>
      <form action="" method="post" className={style.modal}>
        <div className={css.form}>
          <input
            className={css.login}
            type="text"
            placeholder="Введите логин"
          />
          <input
            className={css.password}
            type="text"
            placeholder="Введите пароль"
          />
          <button className={css.send} type="submit" disabled="disabled">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
