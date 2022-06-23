import css from "./All_Programs.module.css";

const All_Programs = (props) => {

  const areas = props.areas;
  const programs = props.programs;

  const result = areas.map( (area) =>
    <div className={css.program_block}>
        <p className={css.area_name}>{area.area_name}</p>
        <div className={css.programs}>
            {
              programs
                .filter((program) => area.area_name === program.area_name)
                .map((program) => (
                  <div className={css.program}>
                    <div className={css.program_name}>
                      <div>{program.form_name}</div>
                      <div className={css.discipline}>
                        <div>{program.discipline_name}</div>
                      </div>
                    </div>
                    <div className={css.profile_name}>{program.profile_name}</div>
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
};

export default All_Programs;

