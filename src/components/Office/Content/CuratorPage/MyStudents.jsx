import { observer } from "mobx-react-lite";
import css from "./MyStudents.module.css";
import { useContext, useEffect, useState } from "react";
import {MainStoreContext} from "../../../../store/mainStore";
import Loading from "../../../secondary/Loading/Loading";

const MyStudents = observer(() => {
  
  const {UsersStore, studentsProgramsStore, curatorsDisciplinesStore, ProgramsStore} = useContext(MainStoreContext);
  const [status, setStatus] = useState(false);

useEffect(() => {
  (async() => {
    
    if(!UsersStore.getMyStudents.length) {
      await UsersStore.getMyStudents();
      await setStatus(true);
    }
          
      })();
    }, [
          UsersStore.statusStudent, 
          UsersStore.statusCurator, 
          studentsProgramsStore.statusProgram, 
          curatorsDisciplinesStore.statusDiscipline, 
          ProgramsStore.isFinishedDelete, 
          ProgramsStore.isFinishedUpdate
        ]
);

  const myStudents = UsersStore.myStudents.map((student) => (
    <div className={css.card} key={student.id} id={student.id}>
      <table className={css.table}>
        <thead>
          <tr className={css.title_block}>
            <th className={`${css.title} ${css.title_left}`}>Логин студента</th>
            <th className={css.title}>Форма обучения</th>
            <th className={css.title}>Программа</th>
            <th className={`${css.title} ${css.title_rigth}`}>Дата начала обучения</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css.cells}>
            <td className={`${css.cell} ${css.cell_left}`}>{student.login}</td>
            <td className={css.cell}>{student.education_form}</td>
            <td className={css.cell}>
              {student.education_area}: {student.profile}
            </td>
            <td className={`${css.cell} ${css.cell_right}`}>
              {new Date(student.purchase_date).toDateString().slice(4)}
            </td>
          </tr>
        </tbody>
      </table>
      <button className={css.status}>Связаться</button>
    </div>
  ));

  return (
    status ?
    <div className={css.wrapper}>
      {myStudents?.length ?
        <div>{myStudents}</div> :
        <div>У вас нет студентов</div>
      }
    </div>
    :
    <Loading />
  );
});

export default MyStudents;