import css from "./AllPrograms.module.css";
import { observer } from "mobx-react-lite";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import NotFound from '../../secondary/NotFound/NotFound';
import {MainStoreContext} from "../../../store/mainStore";
import Loading from "../../secondary/Loading/Loading";

const AllPrograms = observer((props) => {
  
  const {ProgramsStore} = useContext(MainStoreContext);

  const [isActiveCard, setStateCard] = useState(true);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    (async() => {

      try {
        await ProgramsStore.getAreas();   
        await ProgramsStore.getPrograms();
        await setStatus(true);          
      } catch (error) {
          setStateCard(false);
      }

      
    })();
  }, [ProgramsStore.isFinishedDelete, ProgramsStore.isFinishedUpdate]);

  const result = ProgramsStore.areas.map( (area) =>
    <div className={css.program_block} key={area.id} id={area.id}>
        <p className={css.area_name}>{area.name}</p>
        <div className={css.programs}>
            {
              ProgramsStore.programs
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
    status ?
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
    :
    <div className={css.all_programs}>
      <Loading />
    </div>
  );
});

export default AllPrograms;

