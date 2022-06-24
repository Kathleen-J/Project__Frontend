import { observer } from "mobx-react-lite";
import React from "react";
import programs from "../state/programsStore";

const Program = observer(() => {
  return (
    <div>
      <button onClick={async () => await programs.getAreas()}>get areas</button>
      {programs.areas.map((area) => (
        <div className="todo" key={area.id}>
          {area.name}
        </div>
      ))}
      <button onClick={async () => await programs.getPrograms()}>get programs</button>
      {programs.programs.map((program) => (
        <div className="todo" key={program.id}>
          <div>{program.name}</div>
          <div>{program.education_form}</div>
          <div>{program.education_area}</div>
          <div>{program.discipline}</div>
          <div>{program.education_program}</div> 
          <div>{program.profile_name}</div>
          <div>{program.price}</div>
        </div>
      ))}
    </div>
  );
});

export default Program;