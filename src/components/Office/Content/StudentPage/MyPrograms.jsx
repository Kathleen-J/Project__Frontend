import css from "./MyPrograms.module.css";
import { Accordion } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {MainStoreContext} from "../../../../store/mainStore";
import Loading from "../../../secondary/Loading/Loading";

const MyPrograms = observer(() => {
  
  const {UsersStore, studentsProgramsStore, curatorsDisciplinesStore, ProgramsStore} = useContext(MainStoreContext);
  const [status, setStatus] = useState(false);

  function promptResult(id, value){
    let result = prompt("введите количество баллов", '');
    if(value <= result) {
      studentsProgramsStore.sendTestResult(id, result)
      studentsProgramsStore.changeStatusProgram()
    } else {
      studentsProgramsStore.deleteStudentsEducationPrograms(id)
      studentsProgramsStore.changeStatusProgram()
      alert ('Старый результат выше текущего. Результат останется прежним');
    }
}
  
  useEffect(() => {
    (async() => {
      
      if(!studentsProgramsStore.getMyPrograms.length) {
        await studentsProgramsStore.getMyPrograms();
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
      
  const cardUnfinished = studentsProgramsStore.myPrograms
    .filter((student) => student.status_education === "unfinished")
    .map((student) => (
      <div className={css.card} key={student.id}>
        <Accordion.Item eventKey={student.id}>
          <table className={css.table}>
            <thead>
              <tr className={css.title_block}>
                <th className={`${css.title} ${css.title_left}`}>Программа</th>
                <th className={`${css.title} ${css.title_three}`}>Дата начала обучения</th>
                <th className={`${css.title} ${css.title_rigth}`}>Куратор</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css.cells}>
                <td className={`${css.cell} ${css.cell_left}`}>
                  <div>                    
                    {student.education_form} по направлению: {student.education_area.toLowerCase()}
                  </div>
                  {student.discipline}: {student.profile}
                </td>
                <td className={css.cell}>
                  {new Date(student.purchase_date).toDateString().slice(4)}
                </td>
                <td className={`${css.cell} ${css.cell_right}`}>
                  <div>{student.status_curator === 'active' && student.status_curator_user === 'active' ? student.curator : "Не назначен"}</div>
                </td>
              </tr>
            </tbody>
          </table>
            <Accordion.Header className="buttons">
              Содержание
            </Accordion.Header>
          <Accordion.Body>
            <div className={css.options}>
              <div className={css.programs}>
                <div className={css.module_title}>Модули</div>
                <div className={css.modules}>
                  <div className={css.module}>Модуль 1: введение в предмет</div>
                  <div className={css.module}>Модуль 2: основы</div>
                  <div className={css.module}>Модуль 3: углубленный уровень</div>
                </div>
                <button
                  id={student.id}
                  className={css.status}
                  value={student.test_results}
                  onClick={(e) => {promptResult(e.target.id, e.target.value)}}
                >
                  Сдать тест
                </button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </div>
    ));

  const cardFinished = studentsProgramsStore.myPrograms
    .filter((student) => student.status_education === "finished")
    .map((student) => (
      <div className={css.card} key={student.id}>
        <Accordion.Item eventKey={student.id}>
          <table className={css.table}>
            <thead>
              <tr className={css.title_block}>
                <th className={`${css.title} ${css.title_left}`}>Программа</th>
                <th className={`${css.title} ${css.title_three}`}>Дата завершения обучения</th>
                <th className={`${css.title} ${css.title_rigth}`}>Результат теста</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css.cells}>
                <td className={`${css.cell} ${css.cell_left}`}>
                  <div>                    
                      {student.education_form} по направлению: "{student.education_area.toLowerCase()}".
                    </div>
                    {student.discipline}: {student.profile}
                  </td>
                <td className={css.cell}>
                  {student.test_finished_at ? new Date(student.test_finished_at).toDateString().slice(4) : '-'}
                </td>
                <td className={`${css.cell} ${css.cell_right}`}>
                  <div>{student.test_results ? student.test_results : '-'}</div>
                </td>
              </tr>
            </tbody>
          </table>
          {student.test_results >= 80 ? (
            <button className="accordion-button">
              {student.education_form === "Профессия"
                ? "Открыть диплом"
                : "Открыть сертификат"}
            </button>
          ) : (
            <button className="accordion-button">Открыть справку</button>
          )}
        </Accordion.Item>
      </div>
    ));

  return (
    status ?
    <div className={css.wrapper}>

      <div className={css.header}>Активные программы</div>
      {
        cardUnfinished?.length ?
        <Accordion>{cardUnfinished}</Accordion> :
        <div className={css.description}>Нет активных программ</div>
      }

      <div className={css.header_bottom}>Завершенные программы</div>
      {
        cardFinished?.length ?
        <Accordion>{cardFinished}</Accordion> :
        <div className={css.description}>Нет завершенных программ</div>
      }

    </div>
    :
    <Loading />
  );
});

export default MyPrograms;