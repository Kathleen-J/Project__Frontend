import css from './EditPrograms.module.css';
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import programsStore from "../../../../../store/programsStore";

const EditPrograms = observer(() => {

    useEffect(() => {
        (async() => {
    
          if(!programsStore.allprograms.length) {
            await programsStore.getAllPrograms();
          }
          
        })();
      }, [programsStore.isFinishedDelete, programsStore.isFinishedUpdate]);

    const allPrograms = programsStore.allprograms.map((program) => 
        <div className={css.card} key={program.id} id={program.id}>
            <table className={css.table}>
                <thead>                    
                    <tr className={css.title_block}>
                        <th className={`${css.title} ${css.title_left}`}>Форма обучения</th>
                        <th className={`${css.title} ${css.title_two}`}>Направление</th>
                        <th className={`${css.title} ${css.title_three}`}>Дисциплина</th>
                        <th className={`${css.title} ${css.title_four}`}>Программа</th>
                        <th className={`${css.title} ${css.title_rigth}`}>Цена</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr className={css.cells}>
                        <td className={`${css.cell} ${css.cell_left}`}>{program.education_form}</td>
                        <td className={`${css.cell} ${css.cell_two}`}>{program.education_area}</td>
                        <td className={`${css.cell} ${css.cell_three}`}>{program.discipline}</td>
                        <td className={`${css.cell} ${css.cell_four}`}>{program.profile_name}</td>
                        <td className={`${css.cell} ${css.cell_right}`}>{program.price}</td>
                    </tr>
                </tbody>
            </table>
            <button 
                className={`${css.status} ${program.status === 'active' ? css.status__active : css.status__deleted}`} 
                value={program.status === 'active' ? 'status__active' : 'status__deleted'} 
                id={program.id} 
                onClick={(event) => {
                    if(event.target.value === 'status__active') 
                        {
                            programsStore.deleteProgram(event.target.id)
                            programsStore.changeIsFinishedDelete()
                            programsStore.getAllPrograms();
                            programsStore.getPrograms()
                        } 
                    else if(event.target.value === 'status__deleted')
                        {
                            programsStore.updateProgram(event.target.id)
                            programsStore.changeIsFinishedUpdate()
                            programsStore.getAllPrograms();
                            programsStore.getPrograms()
                        }}}
            >
                {program.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
            </button>
        </div> 
    )

    return (
        <div className={css.wrapper}> 
            {allPrograms}
        </div>
    )
})

export default EditPrograms;