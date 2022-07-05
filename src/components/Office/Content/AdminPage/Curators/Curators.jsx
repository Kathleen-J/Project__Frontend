import css from "./Curators.module.css";
import {Accordion} from 'react-bootstrap';
import curators from "../../../../../store/usersStore";
import curatorsOfDisciplines from "../../../../../store/curatorsDisciplinesStore"; 
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";


const Curators = observer(() => {

  let loginInput = React.createRef();
  let passwordInput = React.createRef();

  useEffect(() => {
    (async() => {

      if(!curators.getCurators.length) {
        await curators.getCurators();
      }
  
      if(!curatorsOfDisciplines.getCuratorsOfDisciplines.length) {
        await curatorsOfDisciplines.getCuratorsOfDisciplines();
      }
      
    })();
  }, [curators.statusCurator, curatorsOfDisciplines.statusDiscipline]);

  const card = curators.curators.map((curator) => 
    <div className={css.card} key={curator.id}>
      <Accordion.Item eventKey={curator.id} >
        <table className={css.table}>
          <thead>
            <tr className={css.title_block}>
              <th className={`${css.title} ${css.title_left}`}>Логин куратора</th>
              <th className={`${css.title} ${css.title_two}`}>Статус</th>
              <th className={`${css.title} ${css.title_three}`}>Дата создания</th>
              <th className={`${css.title} ${css.title_rigth}`}>Дата изменения</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css.cells}>
              <td className={`${css.cell} ${css.cell_left}`}>{curator.login}</td>
              <td className={css.cell}>                
                <button 
                    className={`${css.status} ${curator.status === 'active' ? css.status__active : css.status__deleted}`} 
                    value={curator.status === 'active' ? 'status__active' : 'status__deleted'} 
                    id={curator.id} 
                    onClick={(e) => 
                      {if(e.target.value === 'status__active') 
                        {
                          curators.deleteUser(e.target.id)
                          curators.changestatusCurator()
                          curators.getCurators()
                        } 
                      else if (e.target.value === 'status__deleted') 
                        {
                          curators.updateUser(e.target.id)
                          curators.changestatusCurator()
                          curators.getCurators()
                        }}}>
                  {curator.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
                </button>
              </td>
              <td className={`${css.cell} ${css.cell_three}`}>{new Date(curator.created).toDateString().slice(4)}</td>
              <td className={`${css.cell} ${css.cell_right}`}>{curator.updated ? new Date(curator.updated).toDateString().slice(4) : '-'}</td>
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
                          value={curators.loginValue}
                          onChange={(e) => 
                            {
                              curators.setLoginValue(e.target.value);
                            }
                          }
                        />

                        <button 
                          id={curator.id}
                          className={css.btn}
                          onClick={(e) => 
                            {
                              curators.updateUserLogin(e.target.id, loginInput.current.value);
                              curators.cleanLoginValue();
                              curators.changestatusCurator()
                              curators.getCurators()
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
                        value={curators.passwordValue}
                        onChange={(e) => 
                          {
                            curators.setPasswordValue(e.target.value);
                          }
                        }
                      />
                      <button 
                        id={curator.id}
                        className={css.btn}
                        onClick={(e) => 
                          {
                            curators.updateUserPassword(e.target.id, passwordInput.current.value);
                            curators.cleanPasswordValue();
                            curators.changestatusCurator()
                            curators.getCurators()
                          }
                        }
                      >
                        Подтвердить
                      </button>
                    </div>               
              </div>
            </div>

            <div className={css.programs}>
                <div className={css.programs_title}>Дисциплины</div>
                <table className={css.program_table}>
                    <thead>
                        <tr className={css.title_block}>
                            <th className={css.p_title}>Направление</th>
                            <th className={css.p_title}>Наименование дисциплины</th>
                            <th className={css.p_title}>Доступ</th>
                        </tr>
                    </thead>
                      {
                        curatorsOfDisciplines.curators_of_disciplines
                          .filter((discipline) => discipline.id_curator === curator.id)
                          .map((discipline) => (
                            <tbody key={discipline.id}>
                                <tr className={css.program_cells}>
                                      <td className={css.p_cell}>{discipline.education_area}</td>
                                      <td className={css.p_cell}>{discipline.discipline}</td>
                                      <td className={css.p_cell}>                            
                                          <button 
                                            className={`${css.status} ${discipline.status === 'active' ? css.status__active : css.status__deleted}`} 
                                            value={discipline.status === 'active' ? 'status__active' : 'status__deleted'} 
                                            id={discipline.id}
                                            onClick={(e) => 
                                              {if(e.target.value === 'status__active') 
                                                {
                                                  curatorsOfDisciplines.deleteCuratorsDiscipline(e.target.id)
                                                  curatorsOfDisciplines.changeStatusDiscipline()
                                                  curatorsOfDisciplines.getCuratorsOfDisciplines()
                                                } 
                                              else if (e.target.value === 'status__deleted') 
                                                {
                                                  curatorsOfDisciplines.updateCuratorsDiscipline(e.target.id)
                                                  curatorsOfDisciplines.changeStatusDiscipline()
                                                  curatorsOfDisciplines.getCuratorsOfDisciplines()
                                                }}}
                                          >
                                            {discipline.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
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
      
      <Accordion>
        {card}
      </Accordion>

    </div>
  );
});

export default Curators;
