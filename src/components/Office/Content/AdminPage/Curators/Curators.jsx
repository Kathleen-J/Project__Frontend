import css from "./Curators.module.css";
import {Accordion} from 'react-bootstrap';
import curatorsStore from "../../../../../store/curatorsStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";


const Curators = observer(() => {

  useEffect(() => {
    if(!curatorsStore.getCurators.length) {
      curatorsStore.getCurators();
    }
  }, []);

  const card = curatorsStore.curators.map((curator) => 
    <div className={css.card} key={curator.id}>
      <Accordion.Item eventKey={curator.id} >
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
              <td className={`${css.cell} ${css.cell_left}`}>{curator.login}</td>
              <td className={css.cell}>                
                <button 
                    className={`${css.status} ${curator.status === 'active' ? css.status__active : css.status__deleted}`} 
                    value={curator.status === 'active' ? 'status__active' : 'status__deleted'} 
                    id={curator.id} 
                    onClick={(e) => 
                      {if(e.target.value === 'status__active') 
                        {curatorsStore.deleteCurator(e.target.id)} 
                      else if (e.target.value === 'status__deleted') 
                        {curatorsStore.updateCurator(e.target.id)}}}>
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
              <div className={css.programs_title}>Дисциплины</div>
              <table className={css.program_table}>
                  <thead>
                      <tr className={css.title_block}>
                          <th className={css.p_title}>Направление</th>
                          <th className={css.p_title}>Наименование дисциплины</th>
                          <th className={css.p_title}>Доступ</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className={css.program_cells}>
                          <td className={css.p_cell}>Программирование</td>
                          <td className={css.p_cell}>Python</td>
                          <td className={css.p_cell}>                            
                              <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
                          </td>
                      </tr>
                      <tr className={css.program_cells}>
                          <td className={css.p_cell}>Программирование</td>
                          <td className={css.p_cell}>JavaScript</td>
                          <td className={css.p_cell}>                            
                              <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
                          </td>
                      </tr>
                      <tr className={css.program_cells}>
                          <td className={css.p_cell}>Программирование</td>
                          <td className={css.p_cell}>SQL</td>
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

export default Curators;
