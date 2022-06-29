import css from "./Program.module.css";
import programsStore from "../../../store/programsStore";
// import programStore from "../../../store/programStore";
import { useEffect } from "react";
import { useLocation, useParams } from 'react-router-dom';

const Program = (props) => {
    // debugger
    
    
    const location = useLocation();
    const path = location.pathname;
    // const pathIdx = location.pathname.length - 1;
    // const path = +(location.pathname[pathIdx]);

    const {id} = useParams();
    console.log(id);

    // useEffect(() => {
    //     programsStore.getProgram(id);
    //     console.log(programsStore.getProgram(id));
    //   }, []);

    useEffect(() => {
    (async() => {

        if (!programsStore.program.length) {
        await programsStore.getProgram(id);
        console.log(programsStore.program);  

        }
    })();
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
        
            <button className={`${css.btn} ${css.btn_bottom}`} >Купить</button>
  
    </div>
    ) 
}

export default Program;