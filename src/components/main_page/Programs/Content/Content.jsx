import css from "./Content.module.css";
import All_Programs from "./All_Programs/All_Programs";
import Title from "./Title/Title";

const Content = (props) => {
    return (
        <div className={css.content}>
            <Title data={props.data}/>
            <All_Programs />
        </div>
    )
}

export default Content;