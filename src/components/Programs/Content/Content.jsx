import css from "./Content.module.css";
import AllPrograms from "./AllPrograms/AllPrograms";
import Title from "./Title/Title";

const Content = (props) => {
    return (
        <div className={css.content}>
            <Title />
            <AllPrograms />
        </div>
    )
}

export default Content;