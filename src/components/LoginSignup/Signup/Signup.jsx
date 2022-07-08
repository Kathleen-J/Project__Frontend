import style from "./Signup.module.css";
import css from "../LoginSignup.module.css";
import React, { useContext } from "react";
import { MainStoreContext } from "../../../store/mainStore";
import { observer } from "mobx-react-lite";
import users from "../../../store/usersStore";
import { Link } from "react-router-dom";

const SignUp = observer(() => {

  const {AuthStore} = useContext(MainStoreContext);
  // console.log(AuthStore.token);

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
            value={users.loginValue}
            onChange={(e) => 
              {
                users.setLoginValue(e.target.value);
              }
            }
          />
          <input
            className={css.password}
            type="text"
            placeholder="Введите пароль"
            ref={passwordInput}
            value={users.passwordValue}
            onChange={(e) => 
              {
                users.setPasswordValue(e.target.value);
              }
            }
          />
          <Link to='/office/profile' 
            className={css.send}
            onClick={(e) => 
              {
                AuthStore.getToken(loginInput.current.value, passwordInput.current.value);
                users.cleanLoginValue();
                users.cleanPasswordValue();
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