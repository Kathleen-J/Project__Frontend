import { AuthStore } from "../../../../store/authStore";
import css from "./Profile.module.css";

const Profile = () => {
    
    console.log(AuthStore.loginUser);
  return (
    <div className={css.content_profile}>
        <div className={css.loginUser}>Welcome back, Login User!</div>
        
        <div className={css.change_block}>

            <div className={css.change__login}>
                <div className={css.login}>Изменить логин</div>
                <div className={css.change}>                    
                    <input type="text" name="" id="" placeholder="Введите новый логин" className={css.input} />
                    <button className={css.button}>Изменить</button>
                </div>
            </div>

            <div className={css.change__password}>
                <div className={css.password}>Изменить пароль</div>
                <div className={css.change}>                    
                    <input type="text" name="" id="" placeholder="Введите новый пароль" className={css.input} />
                    <button className={css.button}>Изменить</button>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Profile;