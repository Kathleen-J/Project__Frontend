import css from "./Title.module.css";

const Title = (props) => {
  const area = props.areas.map((el) => (
    <a className={css.area_btn} href={`#?area=${el.id}`}  key={el.id}>
      {el.area_name}
    </a>
  ));
  return (
    <div className="title">
      <div className={css.areas_nav}>Направления</div>

      <div className={css.all_areas_nav}>
        <div>
          <a className={css.area_btn} href="#?area=all">
            Все
          </a>
        </div>
        <div>{area}</div>
      </div>
    </div>
  );
};

export default Title;
