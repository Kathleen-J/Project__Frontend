import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.about}>
      <div className={css.education_left}>
        <p className={css.education_online}>ОНЛАЙН ОБУЧЕНИЕ</p>
        <p className={css.education}>Учитесь</p>
        <p className={`${css.education} + ' ' + ${css.education_two}`}>в <span>удобное </span>для</p>
        <p className={`${css.education} + ' ' + ${css.education_three}`}>вас <span>время</span></p>
        <p className={css.skillford}>вместе со SkillFox</p>
      </div>
      <div className={css.education_right}>
        <img src={require('./fox.png')} alt="foxy" className={css.fox}/>
      </div>
    </div>
  );
};

export default About;