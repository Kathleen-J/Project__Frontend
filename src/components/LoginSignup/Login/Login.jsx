import React, { useContext } from "react";
import style from "./Login.module.css";
import css from "../LoginSignup.module.css";
import { observer } from "mobx-react-lite";
import {MainStoreContext} from "../../../store/mainStore";

const Login = observer(() => {

  const {UsersStore} = useContext(MainStoreContext);

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
            placeholder="введите логин" 
            value={UsersStore.loginValue}
            onChange={(e) => 
              {
                UsersStore.setLoginValue(e.target.value);
              }
            }
          />
          <input 
            ref={passwordInput}
            className={css.password} 
            type="text" 
            placeholder="введите пароль" 
            value={UsersStore.passwordValue}
            onChange={(e) => 
              {
                UsersStore.setPasswordValue(e.target.value);
              }
            }
          />
          <button 
            value='student'
            className={css.send}
            onClick={(e) => 
              {
                UsersStore.createUser(e.target.value, loginInput.current.value, passwordInput.current.value);
                UsersStore.cleanLoginValue();
                UsersStore.cleanPasswordValue();
              }
            }
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
});

export default Login;
