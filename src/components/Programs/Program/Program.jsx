import css from "./Program.module.css";
import programsStore from "../../../store/programsStore";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { observer } from "mobx-react-lite";

const Program = observer((props) => {

    const {id} = useParams();

    useEffect(() => {
        programsStore.getProgram(id);
      }, [id]);
      
      
    const programTitle = programsStore.program.map((program) => (        
        <div className={css.education} key={program.id}>    
            <div className={css.education__form}>{program.education_form}</div>
            <div className={css.education__name}>
                <div className={css.education__program_name}>{program.education_program}</div>
                <div className={css.education__discipline}>{program.discipline}</div>
            </div>
            <div className={css.price_block}>                
                <div className={css.price}>Стоимость: {program.price}</div>
                <button className={css.btn} id={program.id}>Купить</button>
            </div>
        </div>
    ))


    return (
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
        
            <button className={`${css.btn} ${css.btn_bottom}`} id={id}>Купить</button>
  
    </div>
    ) 
})

export default Program;