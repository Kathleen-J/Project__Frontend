import style from "./Signup.module.css";
import css from "../LoginSignup.module.css";
import React, { useContext } from "react";
import { MainStoreContext } from "../../../store/mainStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const SignUp = observer(() => {

  const {AuthStore, UsersStore} = useContext(MainStoreContext);

  let loginInput = React.createRef();
  let passwordInput = React.createRef();

  return (
    <div className={"modalWindow"}>
      <form action="" method="post" className={style.modal}>
        <div className={css.form}>
          <input
            ref={loginInput}
            className={css.login}
            type="text"
            placeholder="Введите логин"
            value={UsersStore.loginValue}
            onChange={(e) => 
              {
                UsersStore.setLoginValue(e.target.value);
              }
            }
          />
          <input
            className={css.password}
            type="text"
            placeholder="Введите пароль"
            ref={passwordInput}
            value={UsersStore.passwordValue}
            onChange={(e) => 
              {
                UsersStore.setPasswordValue(e.target.value);
              }
            }
          />
          <Link to='/office/profile' 
            className={css.send}
            onClick={(e) => 
              {
                AuthStore.getToken(loginInput.current.value, passwordInput.current.value);
                UsersStore.cleanLoginValue();
                UsersStore.cleanPasswordValue();
              }
            }
          >
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
});

export default SignUp;