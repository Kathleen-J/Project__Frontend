import style from "./Signup.module.css";
import css from "../LoginSignup.module.css";
import React, { useContext } from "react";
import { MainStoreContext } from "../../../store/mainStore";
import { observer } from "mobx-react-lite";
import { useNavigate  } from "react-router-dom";

const SignUp = observer(() => {

  const {AuthStore, UsersStore} = useContext(MainStoreContext);
  let navigate = useNavigate();

  let loginInput = React.createRef();
  let passwordInput = React.createRef();

  return (
    <div className={"modalWindow"}>
      <div className={style.modal}>
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
            <button
              className={css.send}
              onClick={(e) => 
                {
                  AuthStore.getToken(loginInput.current.value, passwordInput.current.value)
                  // .then(() => AuthStore.decodeData())
                  .then(() => AuthStore.isLoggedIn ? navigate("/office/profile") : (alert('Неверный логин или пароль')));
                  UsersStore.cleanLoginValue();
                  UsersStore.cleanPasswordValue();
                }
              }
            >
              Войти
            </button>
        </div>
      </div>
    </div>
  );
});

export default SignUp;