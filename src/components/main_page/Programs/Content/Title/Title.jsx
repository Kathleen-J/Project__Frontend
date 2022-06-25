import css from "./Title.module.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import programs from "../../../../../state/programsStore";

const Title = observer((props) => {

  useEffect(() => {
    (async() => {
      if (!programs.areas.length) {
        await programs.getAreas();

      }
    })();
  }, []);


  return (
    <div className="title">
      <div className={css.areas_nav}>Направления</div>

      <div className={css.all_areas_nav}>
        <div>
          <a className={css.area_btn} href="#?area=all">
            Все
          </a>
        </div>
        <div>
          {programs.areas.map((area) => (
            <a className={css.area_btn} href={`#?area=${area.id}`}  key={area.id}>
              {area.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Title;
