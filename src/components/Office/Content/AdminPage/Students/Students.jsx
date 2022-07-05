import css from "./Students.module.css";
import {Accordion} from 'react-bootstrap';
import students from "../../../../../store/usersStore";
import studentsPrograms from "../../../../../store/studentsPrograms";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";


const Students = observer(() => {

  let loginInput = React.createRef();
  let passwordInput = React.createRef();
  let [statusBtn, changeStatusBtn] = useState(true);

  useEffect(() => {
    (async() => {

      try {
        if(!students.getStudents.length) {
          await students.getStudents();
        }        
        
        if(!studentsPrograms.getStudentsPrograms.length) {
          await studentsPrograms.getStudentsPrograms();
        }

          // if(studentsStore.getStatus() !== 200) {
          //   throw new Error('failed fetch request');
          //   window.location.reload();
          // }
          // console.log(studentsStore.getStatus()) :
          // console.log(studentsStore.isFinishedUpdate, studentsStore.isFinishedDelete)
  
          // studentsStore.isFinishedDelete !== studentsStore.isFinishedDelete || studentsStore.isFinishedUpdate === studentsStore.isFinishedUpdate ? 
          // console.log(studentsStore.isFinishedUpdate, studentsStore.isFinishedDelete) :
          // console.log('test');
  
          // if(studentsStore.getStatus() !== 200) {
          //   window.location.reload();
          //   console.log(studentsStore.getStatus());
          //   console.log('test');
          // }
          // console.log(studentsStore.getStatus());
      } catch (error) {
        // window.location.reload();
        console.log(error.message);
      }

    })();
  }, [students.statusStudent, studentsPrograms.statusProgram]);

  const card = students.students.map((student) => 
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
                          students.deleteUser(e.target.id) 
                          students.changestatusStudent()
                          students.getStudents();
                        }
                        else if (e.target.value === 'status__deleted') {
                          students.updateUser(e.target.id)
                          students.changestatusStudent()
                          students.getStudents();
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
                          value={students.loginValue}
                          onChange={(e) => 
                            {
                              students.setLoginValue(e.target.value);
                            }
                          }
                        />

                        <button 
                          id={student.id}
                          className={css.btn}
                          onClick={(e) => 
                            {
                              students.updateUserLogin(e.target.id, loginInput.current.value);
                              students.cleanLoginValue();
                              students.changestatusStudent()
                              students.getStudents()
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
                        value={students.passwordValue}
                        onChange={(e) => 
                          {
                            students.setPasswordValue(e.target.value);
                          }
                        }
                      />
                      <button 
                        id={student.id}
                        className={css.btn}
                        onClick={(e) => 
                          {
                            students.updateUserPassword(e.target.id, passwordInput.current.value);
                            students.cleanPasswordValue();
                            students.changestatusStudent()
                            students.getStudents()
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
                        studentsPrograms.students_programs
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
                                                studentsPrograms.deleteStudentsEducationPrograms(e.target.id, e.target.value)
                                                studentsPrograms.changeStatusProgram()
                                                studentsPrograms.getStudentsPrograms()
                                              } 
                                            else if (e.target.value === 'finished') 
                                              {
                                                studentsPrograms.updateStudentsEducationPrograms(e.target.id, e.target.value)
                                                studentsPrograms.changeStatusProgram()
                                                studentsPrograms.getStudentsPrograms()
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
                                              studentsPrograms.deleteStudentsEducationPrograms(e.target.id, e.target.value)
                                              studentsPrograms.changeStatusProgram()
                                              studentsPrograms.getStudentsPrograms()
                                            } 
                                          else if (e.target.value === 'deleted') 
                                            {
                                              studentsPrograms.updateStudentsEducationPrograms(e.target.id, e.target.value)
                                              studentsPrograms.changeStatusProgram()
                                              studentsPrograms.getStudentsPrograms()
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
          value={students.loginValue}
          onChange={(e) => 
            {
              students.setLoginValue(e.target.value);
            }
          }
        />
        <input 
          ref={passwordInput}
          className={`${css.input} ${css.create_el}`} 
          type="text" 
          placeholder="введите пароль" 
          value={students.passwordValue}
          onChange={(e) => 
            {
              students.setPasswordValue(e.target.value);
            }
          }
        />
        <button
          value='student'
          className={`${css.btn} ${css.create_el}`}
          onClick={(e) => 
            {
              students.createUser(e.target.value, loginInput.current.value, passwordInput.current.value);
              students.cleanLoginValue();
              students.cleanPasswordValue();
              students.changestatusStudent()
              students.getStudents()
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
