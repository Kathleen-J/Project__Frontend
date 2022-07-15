import css from "./Title.module.css";

const Title = () => {
  return (
    <div className={css.title}>
      <div className={css.education_left}>
        <p className={css.education_online}>ОНЛАЙН ОБУЧЕНИЕ</p>
        <div className={css.description}>          
          <p className={`${css.education} ${css.description_three}`}>Учитесь</p>
          <p className={`${css.education} ${css.description_one}`}>в <span className={css.span}> удобное </span> для</p>
          <p className={`${css.education} ${css.description_two}`}>вас <span className={css.span}> время</span></p>
        </div>
        <p className={`${css.skillfox} ${css.description}`}>вместе со SkillFox</p>
      </div>
      <div className={css.education_right}>
        <img src={require('./fox.png')} alt="foxy" className={css.fox}/>
      </div>
    </div>
  );
};

export default Title;