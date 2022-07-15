import css from "../../Content.module.css";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import {MainStoreContext} from "../../../../../store/mainStore";
import Loading from "../../../../secondary/Loading/Loading";

const EditPrograms = observer(() => {
    
    const {ProgramsStore} = useContext(MainStoreContext);
    const [status, setStatus] = useState(false);

useEffect(() => {
    (async() => {
        
        try{
            await ProgramsStore.getAllPrograms();
            setStatus(true);
          }catch (e) {
            console.log(e.message);
          }
          
        })();
      }, [ProgramsStore.isFinishedDelete, ProgramsStore.isFinishedUpdate]);

    const allPrograms = ProgramsStore.allprograms.map((program) => 
        <div className={css.card} key={program.id} id={program.id}>
            <table className={css.table}>
                <thead>                    
                    <tr className={css.title_block}>
                        <th className={`${css.title} ${css.title_left_ed_pr}`}>Форма обучения</th>
                        <th className={`${css.title} ${css.title_two_ed_pr}`}>Направление</th>
                        <th className={`${css.title} ${css.title_three_ed_pr}`}>Дисциплина</th>
                        <th className={`${css.title} ${css.title_four_ed_pr}`}>Программа</th>
                        <th className={`${css.title} ${css.title_rigth}`}>Цена</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr className={css.cells}>
                        <td className={`${css.cell} ${css.cell_left_ed_pr}`}>{program.education_form}</td>
                        <td className={`${css.cell} ${css.cell_two_ed_pr}`}>{program.education_area}</td>
                        <td className={`${css.cell} ${css.cell_three_ed_pr}`}>{program.discipline}</td>
                        <td className={`${css.cell} ${css.cell_four_ed_pr}`}>{program.profile_name}</td>
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
                            ProgramsStore.deleteProgram(event.target.id)
                            ProgramsStore.changeIsFinishedDelete()
                            ProgramsStore.getAllPrograms()
                            ProgramsStore.getPrograms()
                        } 
                    else if(event.target.value === 'status__deleted')
                        {
                            ProgramsStore.updateProgram(event.target.id)
                            ProgramsStore.changeIsFinishedUpdate()
                            ProgramsStore.getAllPrograms()
                            ProgramsStore.getPrograms()
                        }}}
            >
                {program.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
            </button>
        </div> 
    )

    return (
        status ?        
        <div className={css.wrapper}> 
            {allPrograms}
        </div>
        :
        <Loading />
    )
})

export default EditPrograms;