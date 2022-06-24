import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/main_page/Header/Header";
import Main from "./components/main_page/Main/Main";
import Programs from "./components/main_page/Programs/Programs";
import Login from "./components/Login_Signup/Login/Login";
import Signup from "./components/Login_Signup/Signup/Signup";
import Program from "./components/Program";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Main />} />
        </Routes>
        <Routes>
          <Route
            path={"/programs"}
            element={<Programs data={props.data} />}
          />
        </Routes>
        <Routes>
          <Route exact path={"/login"} element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path={"/signup"} element={<Signup />} />
        </Routes>
        <Routes>
          <Route exact path={"/program"} element={<Program />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

/* 

    <div className="App">

      <div className='header'>
        <nav class="navbar">
          <div class="logotype">
            <a href='/' class="logo">SkillFox</a>
          </div>
          <a href='#/programs' className='choose__program'>ВЫБРАТЬ ПРОГРАММУ</a>
          <div class="login_singin">
            <a href='#/login' class="logIn">Log In</a>
            <a href='#/signup' class="singUp">Sign Up</a>          
          </div>
        </nav>
      </div>

      <div className='main'>

        <div class="about">
          <div className='education_left'>            
            <p className='education_online'>ОНЛАЙН ОБУЧЕНИЕ</p>
            <p className='education'>Учитесь</p>
            <p className='education education_two'>в <span>удобное </span>для</p>
            <p className='education education_three'>вас <span>время</span></p>
            <p className='skillford'>вместе со SkillFox</p>
          </div>
          <div className='education_right'>
            <img src={require('./fox.png')} alt="foxy" className='fox'/>
          </div>
        </div>

        <div className='about_us'>
            <p class="aboutUs">О НАС</p>
            <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea.
            </p>
            <p className='line_decorator'></p>
            <p class="whyUs">ПОЧЕМУ ИМЕННО МЫ</p>
            <p class="description">
            Lorem ipum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea.
           </p>
        </div>
        
          
        <div class="content_areas">
            <div class="areas">Направления</div>  
            <div class="all_areas">
              <div class="development area">
                <p class="name">Программирование</p>
                <div className='lineDecorator'></div>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum</p>
              </div> 
              <div class="Deisign area">
                <p class="name">Дизайн</p>
                <div className='lineDecorator'></div>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum</p>
              </div>
              <div class="Languages area">
                <p class="name">Иностранные языки</p>
                <div className='lineDecorator'></div>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea explicabo iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas eum</p>
              </div> 
            </div>  
        </div>

        <div className='choose'>
          <a href='#/programs' className='choose_program'>ВЫБРАТЬ ПРОГРАММУ</a>
        </div>

      </div>

      <div className='footer'>
        <div className='copyright'>&copy; SkillFox 2022</div>
      </div>

    </div>

 */
