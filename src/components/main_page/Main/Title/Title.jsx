import css from "./Title.module.css";

const Title = () => {
  return (
    <div className={css.title}>
      <div className={css.education_left}>
        <p className={css.education_online}>ОНЛАЙН ОБУЧЕНИЕ</p>
        <p className={css.education}>Учитесь</p>
        <p className={`${css.education} ${css.description_one}`}>в <span> удобное </span> для</p>
        <p className={`${css.education} ${css.description_two}`}>вас <span> время</span></p>
        <p className={css.skillford}>вместе со SkillFox</p>
      </div>
      <div className={css.education_right}>
        <img src={require('./fox.png')} alt="foxy" className={css.fox}/>
      </div>
    </div>
  );
};

export default Title;