import css from "./Programs.module.css";
import SideBarLeft from "./SideBarLeft/SideBarLeft";
import SideBarRight from "./SideBarRight/SideBarRight";
import Content from "./Content/Content";

const Programs = (props) => {
    return (
        <div className={css.programs}>

            <SideBarLeft />

            <Content />

            <SideBarRight />            
            
        </div>
    ) 
}

export default Programs;