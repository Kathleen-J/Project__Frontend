import css from "./Programs.module.css";
import Side_Bar_Left from "./Side_Bar_Left/Side_Bar_Left";
import Side_Bar_Right from "./Side_Bar_Right/Side_Bar_Right";
import Content from "./Content/Content";

const Programs = (props) => {
    return (
        <div className={css.programs}>

            <Side_Bar_Left />

            <Content />

            <Side_Bar_Right />            
            
        </div>
    ) 
}

export default Programs;