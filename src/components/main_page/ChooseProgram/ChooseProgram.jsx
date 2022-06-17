import css from "./ChooseProgram.module.css";

const ChooseProgram = () => {
  return (
    <div className={css.choose}>
      <a href="#/programs" className={css.choose_program}>
        ВЫБРАТЬ ПРОГРАММУ
      </a>
    </div>
  );
};

export default ChooseProgram;