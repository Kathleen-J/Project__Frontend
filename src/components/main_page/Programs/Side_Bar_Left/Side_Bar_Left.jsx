import css from "./Side_Bar_Left.module.css";

const Side_Bar_Left = () => {
    return (
    <div className={css.sideBar_left}>
        <div className={css.filter}>
            <div className={css.education_form}>Форма обучения</div>
            <div className={css.forms}>
                <a href="#/forms/all">Все</a>
                <a href="#/forms/profession">Профессия</a>
                <a href="#/forms/course">Курс</a>
            </div>
            <div className={css.line_decoration}></div>
        </div>             
    </div>
    )
}

export default Side_Bar_Left;