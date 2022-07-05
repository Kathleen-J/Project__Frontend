import css from "./AllPrograms.module.css";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import programs from "../../../store/programsStore";
import { Link } from "react-router-dom";
import NotFound from '../../NotFound/NotFound';

const AllPrograms = observer((props) => {

  const [isActiveCard, setStateCard] = useState(true);

  useEffect(() => {
    (async() => {

      try {
        await programs.getAreas();   
        await programs.getPrograms();             
      } catch (error) {
          setStateCard(false);
      }

      
    })();
  }, [programs.isFinishedDelete, programs.isFinishedUpdate]);

  const result = programs.areas.map( (area) =>
    <div className={css.program_block} key={area.id} id={area.id}>
        <p className={css.area_name}>{area.name}</p>
        <div className={css.programs}>
            {
              programs.programs
                .filter((program) => area.name === program.education_area)
                .map((program) => (
                  <Link to={`/programs/${program.id}`} className={css.program} key={program.id} id={program.id} onClick={() => {window.scrollTo(0, 0)}}>
                    <div className={css.program_name}>
                      <div>{program.education_form}</div>
                      <div className={css.discipline}>
                        <div>{program.discipline}</div>
                      </div>
                    </div>
                    <div className={css.profile_name}>{program.education_program}</div>
                    <div className={css.price}>
                      <div>Стоимость:</div>
                      <div>{program.price}</div>
                    </div>
                  </Link>
                ))
            }
        </div>
    </div>
  )

  return (
    <div>
      {
        isActiveCard ?
          <div className={css.all_programs}>
            {result}      
          </div>
        :
          <div>
            <NotFound />
          </div>
      }
    </div>
  );
});

export default AllPrograms;

