import css from "./Program.module.css";

const Program = (props) => {
    return (
        <div className={css.card}> 
            
            <div className={css.education}>    
                <div className={css.education__form}>Профессия</div>
        
                <div className={css.education__name}>
                    <div className={css.education__program}>Full-stack разработчик</div>
                    <div className={css.education__area}>Python</div>
                </div>
        
                <button className={css.btn}>Купить</button>
            </div>
        
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
        
            <button className={css.btn}>Купить</button>
  
    </div>
    ) 
}

export default Program;