import css from "./Content.module.css";
import All_Programs from "./All_Programs/All_Programs";
import Title from "./Title/Title";

const Content = (props) => {
    return (
        <div className={css.content}>
            <Title areas={props.data.areas}/>
            <All_Programs areas={props.data.areas} programs={props.data.programs}/>
        </div>
    )
}

export default Content;