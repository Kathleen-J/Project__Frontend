import React, { useContext, useEffect } from "react";
import css from "./Profile.module.css";
import { observer } from "mobx-react-lite";
import { MainStoreContext } from "../../../../store/mainStore";

const Profile = observer(() => {

    const {AuthStore, UsersStore} = useContext(MainStoreContext);

    let loginInput = React.createRef();
    let passwordInput = React.createRef();

    useEffect(() => {
        AuthStore.decodeData();
    }, [AuthStore.token]);
    
  return (
    <div className={css.content_profile}>
        <div className={css.loginUser}>Welcome back, {AuthStore.loginUser}!</div>
        
        <div className={css.change_block}>

            <div className={css.change__login}>
                <div className={css.login}>Изменить логин</div>
                <div className={css.change}>
                    <input 
                          ref={loginInput}
                          className={css.input} 
                          type="text" 
                          placeholder="введите новый логин" 
                          value={UsersStore.loginValue}
                          onChange={(e) => 
                            {
                              UsersStore.setLoginValue(e.target.value);
                            }
                          }
                        />
                    <button 
                        id={AuthStore.idUser}
                        className={css.button}
                        onClick={(e) => 
                            {
                              UsersStore.updateUserLogin(e.target.id, loginInput.current.value)
                              .then(AuthStore.getNewToken(loginInput.current.value))
                              UsersStore.cleanLoginValue();
                            }
                        }
                    >
                        Изменить
                    </button>
                </div>
            </div>

            <div className={css.change__password}>
                <div className={css.password}>Изменить пароль</div>
                <div className={css.change}>                    
                    <input 
                        ref={passwordInput}
                        type="text"
                        placeholder="Введите новый пароль" 
                        className={css.input} 
                        value={UsersStore.passwordValue}
                        onChange={(e) => 
                            {
                              UsersStore.setPasswordValue(e.target.value);
                            }
                        }
                    />
                    <button 
                        id={AuthStore.idUser}
                        className={css.button}
                        onClick={(e) => 
                            {
                              UsersStore.updateUserPassword(e.target.id, passwordInput.current.value);
                              UsersStore.cleanPasswordValue();
                            }
                        }
                    >
                        Изменить
                    </button>
                </div>
            </div>

        </div>
    </div>
  );
});

export default Profile;