import css from "./SideBarLeft.module.css";

const SideBarLeft = () => {
  return (
    <div className={css.sideBar_left}>
      <div className={css.filter}>
        <div className={css.education_form}>Форма обучения</div>
        <div className={css.forms}>
          <a href="#?form=all">Все</a>
          <a href="#?form=profession">Профессия</a>
          <a href="#?form=course">Курс</a>
        </div>
        <div className={css.line_decoration}></div>
      </div>
    </div>
  );
};

export default SideBarLeft;