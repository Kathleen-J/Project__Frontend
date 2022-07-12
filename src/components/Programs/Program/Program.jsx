import css from "./Program.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import NotFound from '../../secondary/NotFound/NotFound';
import {MainStoreContext} from "../../../store/mainStore";
import Loading from "../../secondary/Loading/Loading";

const Program = observer((props) => {
    
    const {ProgramsStore, studentsProgramsStore, AuthStore} = useContext(MainStoreContext);

    //для отображения загрузки до отрисовки страницы с актуальными данными
    const [status, setStatus] = useState(false);
    //для отображения 404 ошибки на странице, если такой программы нет
    const [isActiveCard, setStateCard] = useState(true);

    const {id} = useParams();

    useEffect(() => {
    (async() => {

        try {
            await ProgramsStore.getProgram(id);
            
            if(!AuthStore.isLoggedIn) {
                try {                    
                    setStatus(true);
                } catch (error) {
                    //загрузить данные с БД при любом исходе и в return() уже корректно их обработать
                    await ProgramsStore.getProgram(id);
                    setStatus(true);
                }
            }
            
            if(AuthStore.isLoggedIn) {
                try {
                    await studentsProgramsStore.getMyProgram(id);
                    setStatus(true);
                } catch (error) {
                    //загрузить данные с БД при любом исходе и в return() уже корректно их обработать
                    await ProgramsStore.getProgram(id);
                    //если такая программа не куплена (не найдена в БД под нашим user.id), 
                    //тогда отобразить статус загрузки данных = true, чтобы спуститься ниже по условию в return()
                    //т.е. ничего не делать в таком случае; 
                    //иначе будут доступны только купленные программы, а при переходе на неприобретенную программу будет вечная загрузка
                    setStatus(true);
                }
            }
                    
        } catch (error) {
            setStateCard(false);
            setStatus(true);
        }

    })();
    }, [id, ProgramsStore.resStatus]);

    const programTitle = ProgramsStore.program.map((program) => (        
        <div className={css.education} key={program.id}>    
            <div className={css.education__form}>{program.education_form}</div>
            <div className={css.education__name}>
                <div className={css.education__program_name}>{program.education_program}</div>
                <div className={css.education__discipline}>{program.discipline}</div>
            </div>
            {studentsProgramsStore.myProgram.id === program.id ?
                <div className={css.price_block}>
                    <div className={css.btn_bought} id={program.id}>Приобретено</div>
                </div>
                :
                <div className={css.price_block}>
                    <div className={css.price}>Стоимость: {program.price}</div>
                    <button 
                        className={css.btn} 
                        id={program.id}
                        onClick={(e) =>
                            {   AuthStore.isLoggedIn ?
                                ProgramsStore.buyProgram(e.target.id)
                                : 
                                alert('Зарегистрируйтесь или войдите');
                            }
                        }
                    >
                        Купить
                    </button>
                </div>
            }
        </div>
    ))
       
        return (
          (status) ?
          <div>
              {
                isActiveCard ?
                  <div className={css.card}> 
                      {programTitle}
                    
                      <div className={css.skills}>
                            <div className={css.skills__title}>Чему вы научитесь</div>
                            <div className={css.skills__description_block}>
                                <div className={css.skills__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                <div className={css.skills__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                <div className={css.skills__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                            </div>
                      </div>
                    
                      <div className={css.program}>
                            <div className={css.program__title}>Программа обучения</div>
                            <div className={css.program_all}>          
                                <div className={css.program__block}>
                                    <div className={css.program__subtitle}>Модуль 1</div>        
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                    <div className={css.lineDecorator}></div>
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                </div>
                                <div className={css.program__block}>
                                    <div className={css.program__subtitle}>Модуль 2</div>                 
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                </div>
                                <div className={css.program__block}>
                                    <div className={css.program__subtitle}>Модуль 3</div>              
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                    <div className={css.lineDecorator}></div>
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                    <div className={css.lineDecorator}></div>
                                    <div className={css.program__description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut eligendi corporis magnam, a dolor, reiciendis dignissimos iusto laudantium ad excepturi commodi.</div>
                                </div>
                            </div>
                      </div>
                    
                      <div className={css.curator}>                
                            <div className={css.curator__title}>Поддержка куратора</div>               
                                <div className={css.curator__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nihil obcaecati officiis, magni itaque! Quia, consectetur. Magni, blanditiis eligendi ex nesciunt enim, error suscipit quae ad perferendis mollitia labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nihil obcaecati officiis, magni itaque! Quia, consectetur. Magni, blanditiis eligendi ex nesciunt enim, error suscipit quae ad perferendis mollitia labore.</div>
                      </div>
    
                      {studentsProgramsStore.myProgram.id === +id ?
                        <div className={css.price_block}>
                            <div className={css.btn_bought} id={id}>Приобретено</div>
                        </div>
                        :
                        <div className={css.price_block}>
                            <button 
                                className={`${css.btn} ${css.btn_bottom}`} 
                                id={+id}
                                onClick={(e) =>
                                    {   AuthStore.isLoggedIn ?
                                        ProgramsStore.buyProgram(e.target.id)
                                        : 
                                        alert('Зарегистрируйтесь или войдите');
                                    }
                                }
                            >
                                Купить
                            </button>
                        </div>
                      }
                  </div>
                :
                <div>
                    <NotFound />
                </div>
              }
          </div>
          :
          <div>
            <Loading />
          </div>
        )
})

export default Program;