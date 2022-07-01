import css from "./Students.module.css";

const Students = () => {
  return (
    <div className={css.wrapper}>

      <div className={css.card}>
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
              <td className={`${css.cell} ${css.cell_left}`}>Student Login</td>
              <td className={css.cell}>                
                <button className={`${css.status} ${css.status__active}`}>Заблокировать</button>
              </td>
              <td className={`${css.cell} ${css.cell_three}`}>01.07.2022</td>
              <td className={`${css.cell} ${css.cell_right}`}>01.07.2022</td>
            </tr>
          </tbody>
        </table>
        <button className={css.status}> Дополнительно </button>

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
      </div>

    </div>
  );
};

export default Students;