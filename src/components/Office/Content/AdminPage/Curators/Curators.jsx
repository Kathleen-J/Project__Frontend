import css from "../../Content.module.css";
import {Accordion} from 'react-bootstrap';
import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {MainStoreContext} from "../../../../../store/mainStore";
import Loading from "../../../../secondary/Loading/Loading";

const Curators = observer(() => {
  
  const {UsersStore, curatorsDisciplinesStore} = useContext(MainStoreContext);

  let loginInput = React.createRef();
  let passwordInput = React.createRef();
  let [statusBtn, changeStatusBtn] = useState(true);
  const [status, setStatus] = useState(false);

useEffect(() => {
  (async() => {
    
    if(!UsersStore.getCurators.length) {
      await UsersStore.getCurators();
      await setStatus(true);
    }
  
    if(!curatorsDisciplinesStore.getCuratorsOfDisciplines.length) {
      await curatorsDisciplinesStore.getCuratorsOfDisciplines();
    }
    
  })();
}, [UsersStore.statusCurator, curatorsDisciplinesStore.statusDiscipline]);

  const card = UsersStore.curators.map((curator) => 
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
                          UsersStore.deleteUser(e.target.id)
                          UsersStore.changestatusCurator()
                          UsersStore.getCurators()
                        } 
                      else if (e.target.value === 'status__deleted') 
                        {
                          UsersStore.updateUser(e.target.id)
                          UsersStore.changestatusCurator()
                          UsersStore.getCurators()
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
                          value={UsersStore.loginValue}
                          onChange={(e) => 
                            {
                              UsersStore.setLoginValue(e.target.value);
                            }
                          }
                        />

                        <button 
                          id={curator.id}
                          className={css.btn}
                          onClick={(e) => 
                            {
                              UsersStore.updateUserLogin(e.target.id, loginInput.current.value);
                              UsersStore.cleanLoginValue();
                              UsersStore.changestatusCurator()
                              UsersStore.getCurators()
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
                        id={curator.id}
                        className={css.btn}
                        onClick={(e) => 
                          {
                            UsersStore.updateUserPassword(e.target.id, passwordInput.current.value);
                            UsersStore.cleanPasswordValue();
                            UsersStore.changestatusCurator()
                            UsersStore.getCurators()
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
                        curatorsDisciplinesStore.curators_of_disciplines
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
                                                  curatorsDisciplinesStore.deleteCuratorsDiscipline(e.target.id)
                                                  curatorsDisciplinesStore.changeStatusDiscipline()
                                                  curatorsDisciplinesStore.getCuratorsOfDisciplines()
                                                } 
                                              else if (e.target.value === 'status__deleted') 
                                                {
                                                  curatorsDisciplinesStore.updateCuratorsDiscipline(e.target.id)
                                                  curatorsDisciplinesStore.changeStatusDiscipline()
                                                  curatorsDisciplinesStore.getCuratorsOfDisciplines()
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
    status ?    
    <div className={css.wrapper}>
      
      <div className={`${css.createBtn} ${statusBtn ? '' : css.closed}`} onClick={() => changeStatusBtn(prevState => !prevState)}>Создать нового куратора</div>
      
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
          value='curator'
          className={`${css.btn} ${css.create_el}`}
          onClick={(e) => 
            {
              UsersStore.createUser(e.target.value, loginInput.current.value, passwordInput.current.value);
              UsersStore.cleanLoginValue();
              UsersStore.cleanPasswordValue();
              UsersStore.changestatusCurator()
              UsersStore.getCurators()
            }
          }
        >
          Создать куратора
        </button>
      </div>

      <Accordion>
        {card}
      </Accordion>

    </div>
    :
    <Loading />
  );
});

export default Curators;
