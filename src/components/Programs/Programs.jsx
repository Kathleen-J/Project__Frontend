import css from "./Programs.module.css";
import Title from "./Title/Title";
import AllPrograms from "./AllPrograms/AllPrograms";

const Programs = (props) => {
    return (
        <div className={css.programs}>
            <div className={css.content}>                
                <Title />
                <AllPrograms />
            </div>
        </div>
    ) 
}

export default Programs;