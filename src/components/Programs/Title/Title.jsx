import css from "./Title.module.css";
import { observer } from "mobx-react-lite";
import { useEffect, useContext } from "react";
// import programs from "../../../store/programsStore";
import {MainStoreContext} from "../../../store/mainStore";

const Title = observer((props) => {
  
  const {AuthStore, ProgramsStore} = useContext(MainStoreContext);

  useEffect(() => {
    (async() => {
      if (!ProgramsStore.areas.length) {
        await ProgramsStore.getAreas();

      }
    })();
  }, [ProgramsStore.areas]);


  return (
    <div className="title">
      <div className={css.areas_nav}>Направления</div>

      <div className={css.all_areas_nav}>
          <a className={css.area_btn} href="#?area=all">
            Все
          </a>
          {ProgramsStore.areas.map((area) => (
            <a className={css.area_btn} href={`#?area=${area.id}`}  key={area.id} id={area.id}>
              {area.name}
            </a>
          ))}
      </div>
    </div>
  );
});

export default Title;
