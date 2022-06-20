import css from "./ChooseProgram.module.css";
import { Link } from "react-router-dom";


const ChooseProgram = () => {
  return (
    <div className={css.choose}>
      <Link to="/programs" className={css.choose_program}>
        ВЫБРАТЬ ПРОГРАММУ
      </Link>
    </div>
  );
};

export default ChooseProgram;