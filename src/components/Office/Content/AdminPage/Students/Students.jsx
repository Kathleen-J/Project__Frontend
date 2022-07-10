import css from "../../Content.module.css";
import {Accordion} from 'react-bootstrap';
// import students from "../../../../../store/usersStore";
// import studentsPrograms from "../../../../../store/studentsProgramsStore";
import {MainStoreContext} from "../../../../../store/mainStore";
import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";


const Students = observer(() => {

  const {AuthStore, UsersStore, studentsProgramsStore} = useContext(MainStoreContext);

  let loginInput = React.createRef();
  let passwordInput = React.createRef();
  let [statusBtn, changeStatusBtn] = useState(true);

  useEffect(() => {
    (async() => {

      try {
        if(!UsersStore.getStudents.length) {
          await UsersStore.getStudents();
        }        
        
        if(!studentsProgramsStore.getStudentsPrograms.length) {
          await studentsProgramsStore.getStudentsPrograms();
        }

      } catch (error) {
        console.log(error.message);
      }

    })();
  }, [UsersStore.statusStudent, studentsProgramsStore.statusProgram]);

  const card = UsersStore.students.map((student) => 
    <div className={css.card} key={student.id}>
      <Accordion.Item eventKey={student.id} >
        <table className={css.table}>
          <thead>
            <tr className={css.title_block}>
              <th className={`${css.title} ${css.title_left}`}>Логин студента</th>
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
                        {if(e.target.value === 'status__active') {
                          UsersStore.deleteUser(e.target.id) 
                          .then(UsersStore.changestatusStudent())
                          .then(UsersStore.getStudents());
                        }
                        else if (e.target.value === 'status__deleted') {
                          UsersStore.updateUser(e.target.id)
                          .then(UsersStore.changestatusStudent())
                          .then(UsersStore.getStudents());
                        }}}>
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
                        <input 
                          ref={loginInput}
                          className={css.input} 
                          type="text" 
                          placeholder="введите новый логин" 
                          value={UsersStore.loginValue}
                          onChange={(e) => 
                            {
                              UsersStore.setLoginValue(e.target.value);
                            }
                          }
                        />

                        <button 
                          id={student.id}
                          className={css.btn}
                          onClick={(e) => 
                            {
                              UsersStore.updateUserLogin(e.target.id, loginInput.current.value)
                              .then(UsersStore.cleanLoginValue())
                              .then(UsersStore.changestatusStudent())
                              .then(UsersStore.getStudents())
                            }
                          }
                        >
                          Подтвердить
                        </button>
                    </div>               
              </div>
            </div>

            <div className={css.change_block}>
              <div className={css.change_password}>                
                  <div>изменить пароль</div>   
                    <div>
                      <input 
                        ref={passwordInput}
                        className={css.input} 
                        type="text" 
                        placeholder="введите новый пароль" 
                        value={UsersStore.passwordValue}
                        onChange={(e) => 
                          {
                            UsersStore.setPasswordValue(e.target.value);
                          }
                        }
                      />
                      <button 
                        id={student.id}
                        className={css.btn}
                        onClick={(e) => 
                          {
                            UsersStore.updateUserPassword(e.target.id, passwordInput.current.value)
                            .then(UsersStore.cleanPasswordValue())
                            .then(UsersStore.changestatusStudent())
                            .then(UsersStore.getStudents())
                          }
                        }
                      >
                        Подтвердить
                      </button>
                    </div>               
              </div>
            </div>

            <div className={css.programs}>
                <div className={css.programs_title}>Программы</div>
                <table className={css.program_table}>
                    <thead>
                        <tr className={css.title_block}>
                            <th className={css.p_title}>Программа</th>
                            <th className={css.p_title}>Дата приобретения</th>
                            <th className={css.p_title}>Тестирование</th>
                            <th className={css.p_title}>Дата сдачи теста</th>
                            <th className={css.p_title}>Дата изменения</th>
                            <th className={css.p_title}>Статус обучения</th>
                            <th className={css.p_title}>Доступ</th>
                        </tr>
                    </thead>
                      {
                        studentsProgramsStore.students_programs
                          .filter((program) => program.id_student === student.id)
                          .map((program) => (
                            <tbody key={program.id}>
                                <tr className={css.program_cells}>
                                    <td className={css.p_cell}>{program.discipline + ': ' + program.profile}</td>
                                    <td className={css.p_cell}>{program.purchase_date ? new Date(program.purchase_date).toDateString().slice(4) : '-'}</td>
                                    <td className={css.p_cell}>{program.test_results ? program.test_results : '-'}</td>
                                    <td className={css.p_cell}>{program.test_finished_at ? new Date(program.test_finished_at).toDateString().slice(4) : '-'}</td>
                                    <td className={css.p_cell}>{program.status_updated_at ? new Date(program.status_updated_at).toDateString().slice(4) : '-'}</td>
                                    <td className={css.p_cell}>
                                      <button 
                                          className={`${css.status} ${program.status_education === 'unfinished' ? css.status__active : css.status__deleted}`} 
                                          value={program.status_education === 'unfinished' ? 'unfinished' : 'finished'} 
                                          id={program.id}
                                          onClick={(e) => 
                                            {if(e.target.value === 'unfinished') 
                                              {
                                                studentsProgramsStore.deleteStudentsEducationPrograms(e.target.id, e.target.value)
                                                .then(studentsProgramsStore.changeStatusProgram())
                                                .then(studentsProgramsStore.getStudentsPrograms())
                                              } 
                                            else if (e.target.value === 'finished') 
                                              {
                                                studentsProgramsStore.updateStudentsEducationPrograms(e.target.id, e.target.value)
                                                .then(studentsProgramsStore.changeStatusProgram())
                                                .then(studentsProgramsStore.getStudentsPrograms())
                                              }
                                            }
                                          }
                                        >
                                        {program.status_education === 'unfinished' ? 'Завершить' : 'Отменить завершение'}
                                      </button>
                                    </td>
                                    <td className={css.p_cell}>                            
                                      <button 
                                        className={`${css.status} ${program.status_program === 'active' ? css.status__active : css.status__deleted}`} 
                                        value={program.status_program === 'active' ? 'active' : 'deleted'} 
                                        id={program.id}
                                        onClick={(e) => 
                                          {if(e.target.value === 'active') 
                                            {
                                              studentsProgramsStore.deleteStudentsEducationPrograms(e.target.id, e.target.value)
                                              .then(studentsProgramsStore.changeStatusProgram())
                                              .then(studentsProgramsStore.getStudentsPrograms())
                                            } 
                                          else if (e.target.value === 'deleted') 
                                            {
                                              studentsProgramsStore.updateStudentsEducationPrograms(e.target.id, e.target.value)
                                              .then(studentsProgramsStore.changeStatusProgram())
                                              .then(studentsProgramsStore.getStudentsPrograms())
                                            }
                                          }
                                        }
                                      >
                                        {program.status_program === 'active' ? 'Заблокировать' : 'Разблокировать'}
                                      </button>
                                    </td>
                                </tr>
                            </tbody>
                          ))
                      }
                </table>
            </div>

          </div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )


  return (
    <div className={css.wrapper}>

      <div className={`${css.createBtn} ${statusBtn ? '' : css.closed}`} onClick={() => changeStatusBtn(prevState => !prevState)}>Создать нового студента</div>
      
      <div className={`${css.card} ${!statusBtn ? css.create_card : css.closed}`}>
        <div className={`${css.status} ${css.status__active}`} onClick={() => changeStatusBtn(prevState => !prevState)}>X</div>
        <input 
          ref={loginInput}
          className={`${css.input} ${css.create_el}`} 
          type="text" 
          placeholder="введите логин" 
          value={UsersStore.loginValue}
          onChange={(e) => 
            {
              UsersStore.setLoginValue(e.target.value);
            }
          }
        />
        <input 
          ref={passwordInput}
          className={`${css.input} ${css.create_el}`} 
          type="text" 
          placeholder="введите пароль" 
          value={UsersStore.passwordValue}
          onChange={(e) => 
            {
              UsersStore.setPasswordValue(e.target.value);
            }
          }
        />
        <button
          value='student'
          className={`${css.btn} ${css.create_el}`}
          onClick={(e) => 
            {
              UsersStore.createUser(e.target.value, loginInput.current.value, passwordInput.current.value);
              UsersStore.cleanLoginValue();
              UsersStore.cleanPasswordValue();
              UsersStore.changestatusStudent()
              UsersStore.getStudents()
            }
          }
        >
          Создать студента
        </button>
      </div>

      <Accordion>        
          {card}
      </Accordion>


    </div>
  );
});

export default Students;
