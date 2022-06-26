import css from "./AllPrograms.module.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import programs from "../../../../state/programsStore";

const All_Programs = observer((props) => {

  useEffect(() => {
    (async() => {
      if (!programs.areas.length) {
        await programs.getAreas();

      }
      if (!programs.programs.length) {
      await programs.getPrograms();

      }
    })();
  }, []);

  const result = programs.areas.map( (area) =>
    <div className={css.program_block} key={area.id}>
        <p className={css.area_name}>{area.name}</p>
        <div className={css.programs}>
            {
              programs.programs
                .filter((program) => area.name === program.education_area)
                .map((program) => (
                  <div className={css.program} key={program.id}>
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
                  </div>
                ))
            }
        </div>
    </div>
  )

  return (
    <div className={css.all_programs}>
      {result}
    </div>
  );
});

export default All_Programs;

