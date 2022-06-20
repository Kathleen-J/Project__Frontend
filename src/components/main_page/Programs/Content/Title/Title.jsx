import css from "./Title.module.css";

const Title = (props) => {
    const area = props.data.map(el => <a className={css.area_btn} href="#/programs/areas">{el.area_name}</a>);
    return (
        <div className='title'>
            <div className={css.areas_nav}>Направления</div>

            <div className={css.all_areas_nav}>
                <div>                    
                    <a className={css.area_btn} href="#/programs/areas">Все</a>
                </div>
                <div>
                    {area}                    
                </div>
            </div>
        </div>
    )
}

export default Title;