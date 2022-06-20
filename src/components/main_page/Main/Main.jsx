import Title from "./Title/Title";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContentAreas from "./ContentAreas/ContentAreas.jsx";
import ChooseProgram from "./ChooseProgram/ChooseProgram.jsx";

const Main = () => {
    return (
        <div className="main">
            <Title />
            <AboutUs />
            <ContentAreas />
            <ChooseProgram />
        </div>
    )
}

export default Main;