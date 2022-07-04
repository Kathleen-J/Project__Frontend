import css from "./Title.module.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import programs from "../../../store/programsStore";

const Title = observer((props) => {

  useEffect(() => {
    (async() => {
      if (!programs.areas.length) {
        await programs.getAreas();

      }
    })();
  }, [programs.areas]);


  return (
    <div className="title">
      <div className={css.areas_nav}>Направления</div>

      <div className={css.all_areas_nav}>
          <a className={css.area_btn} href="#?area=all">
            Все
          </a>
          {programs.areas.map((area) => (
            <a className={css.area_btn} href={`#?area=${area.id}`}  key={area.id} id={area.id}>
              {area.name}
            </a>
          ))}
      </div>
    </div>
  );
});

export default Title;
