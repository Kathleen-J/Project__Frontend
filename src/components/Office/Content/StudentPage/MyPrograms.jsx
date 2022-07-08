import css from "./MyPrograms.module.css";
import { Accordion } from "react-bootstrap";
import students from "../../../../store/studentsPrograms";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

const MyPrograms = observer(() => {

    useEffect(() => {
        (async() => {
    
          if(!students.getMyPrograms.length) {
            await students.getMyPrograms();
          }
          
        })();
      }, [students.students_programs]);

      
  const cardUnfinished = students.myPrograms
    .filter((student) => student.status_education === "unfinished")
    .map((student) => (
      <div className={css.card} key={student.id}>
        <Accordion.Item eventKey={student.id}>
          <table className={css.table}>
            <thead>
              <tr className={css.title_block}>
                <th className={`${css.title} ${css.title_left}`}>Форма обучения</th>
                <th className={`${css.title} ${css.title_two}`}>Программа</th>
                <th className={`${css.title} ${css.title_three}`}>Дата начала обучения</th>
                <th className={`${css.title} ${css.title_rigth}`}>Куратор</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css.cells}>
                <td className={`${css.cell} ${css.cell_left}`}>
                  {student.education_form}
                </td>
                <td className={css.cell}>
                  {student.education_area}: {student.profile}
                </td>
                <td className={css.cell}>
                  {new Date(student.purchase_date).toDateString().slice(4)}
                </td>
                <td className={`${css.cell} ${css.cell_right}`}>
                  <div>{student.status_curator === 'active' ? student.curator : "Не назначен"}</div>
                    {
                        student.status_curator === 'active' ? 
                        (
                            <button className={css.status} id={student.id}>
                                Связаться
                            </button>
                        ) 
                        : 
                        (
                            ""
                        )
                    }
                </td>
              </tr>
            </tbody>
          </table>
          <Accordion.Header>Содержание программы</Accordion.Header>
          <Accordion.Body>
            <div className={css.options}>
              <div className={css.programs}>
                <div className={css.programs_title}>Модули</div>
                <div className={css.program_tablee}>
                  <div>Модуль 1: введение в предмет</div>
                  <div>Модуль 2: основы</div>
                  <div>Модуль 3: углубленный уровень</div>
                </div>
                <button className={css.status}>Сдать тест</button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </div>
    ));

  const cardFinished = students.myPrograms
    .filter((student) => student.status_education === "finished")
    .map((student) => (
      <div className={css.card} key={student.id}>
        <Accordion.Item eventKey={student.id}>
          <table className={css.table}>
            <thead>
              <tr className={css.title_block}>
                <th className={`${css.title} ${css.title_left}`}>Форма обучения</th>
                <th className={`${css.title} ${css.title_two}`}>Программа</th>
                <th className={`${css.title} ${css.title_three}`}>Дата завершения обучения</th>
                <th className={`${css.title} ${css.title_rigth}`}>Результат теста</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css.cells}>
                <td className={`${css.cell} ${css.cell_left}`}>
                  {student.education_form}
                </td>
                <td className={css.cell}>
                  {student.education_area}: {student.profile}
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
    <div className={css.wrapper}>
        <div>Активные программы</div>
        <Accordion>{cardUnfinished}</Accordion>
        <div>Завершенные программы</div>
        <Accordion>{cardFinished}</Accordion>
    </div>
  );
});

export default MyPrograms;