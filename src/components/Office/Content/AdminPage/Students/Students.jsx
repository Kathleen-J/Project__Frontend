import css from "./Students.module.css";
import {Accordion} from 'react-bootstrap';
import studentsStore from "../../../../../store/studentsStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Students = observer(() => {

  useEffect(() => {
    if(!studentsStore.getStudents.length) {
      studentsStore.getStudents();
    }
  }, []);

  const card = studentsStore.students.map((student) => 
    <div className={css.card} key={student.id}>
    <Accordion.Item eventKey={student.id} >
      <table className={css.table}>
        <thead>
          <tr className={css.title_block}>
            <th className={`${css.title} ${css.title_left}`}>Логин</th>
            <th className={`${css.title} ${css.title_two}`}>Статус</th>
            <th className={`${css.title} ${css.title_three}`}>Дата создания</th>
            <th className={`${css.title} ${css.title_rigth}`}>Дата изменения</th>
          </tr>
        </thead>
        <tbody>
            <tr className={css.cells}>
              <td className={`${css.cell} ${css.cell_left}`}>{student.login}</td>
              <td className={css.cell}>                
                <button 
                    className={`${css.status} ${student.status === 'active' ? css.status__active : css.status__deleted}`} 
                    value={student.status === 'active' ? 'status__active' : 'status__deleted'} 
                    id={student.id}
                    onClick={(e) => 
                      {if(e.target.value === 'status__active') 
                        {studentsStore.deleteStudent(e.target.id)} 
                      else if (e.target.value === 'status__deleted') 
                        {studentsStore.updateStudent(e.target.id)}}}>
                  {student.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
                </button>
              </td>
              <td className={`${css.cell} ${css.cell_three}`}>{new Date(student.created).toDateString().slice(4)}</td>
              <td className={`${css.cell} ${css.cell_right}`}>{student.updated ? new Date(student.updated).toDateString().slice(4) : '-'}</td>
            </tr>
          </tbody>
      </table>
      <Accordion.Header>
        Дополнительно
      </Accordion.Header>
      <Accordion.Body>
        <div className={css.options}>

            <div className={css.change_block}>
                <div className={css.change_login}>                
                    <div>изменить логин</div>   
                    <div>
                        <input className={css.input} type="text" placeholder="введите новый логин" />
                        <button className={css.btn}>Подтвердить</button>
                    </div>               
                </div>
            </div>
            <div className={css.change_block}>
                <div className={css.change_password}>                
                    <div>изменить пароль</div>   
                    <div>
                        <input className={css.input} type="text" placeholder="введите новый пароль" />
                        <button className={css.btn}>Подтвердить</button>
                    </div>               
                </div>
            </div>

            <div className={css.programs}>
                <div className={css.programs_title}>Программы</div>
                <table className={css.program_table}>
                    <thead>
                        <tr className={css.title_block}>
                            <th className={css.p_title}>Программа</th>
                            <th className={css.p_title}>Тестирование</th>
                            <th className={css.p_title}>Статус программы</th>
                            <th className={css.p_title}>Доступ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={css.program_cells}>
                            <td className={css.p_cell}>Python: Full-stack разработчик</td>
                            <td className={css.p_cell}>80 баллов</td>
                            <td className={css.p_cell}>Завершенная</td>
                            <td className={css.p_cell}>                            
                                <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
                            </td>
                        </tr>
                        <tr className={css.program_cells}>
                            <td className={css.p_cell}>Python: Full-stack разработчик</td>
                            <td className={css.p_cell}>-</td>
                            <td className={css.p_cell}>Завершенная</td>
                            <td className={css.p_cell}>                            
                                <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
                            </td>
                        </tr>
                        <tr className={css.program_cells}>
                            <td className={css.p_cell}>Python: Full-stack разработчик</td>
                            <td className={css.p_cell}>80 баллов</td>
                            <td className={css.p_cell}>Завершенная</td>
                            <td className={css.p_cell}>                            
                                <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
    </div>
  )


  return (
    <div className={css.wrapper}>

      <Accordion>        
          {card}
      </Accordion>


    </div>
  );
});

export default Students;
