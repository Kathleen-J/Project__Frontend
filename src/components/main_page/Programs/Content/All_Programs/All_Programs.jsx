import css from "./All_Programs.module.css";

let areas = [
  { id: 1, area_name: "Программирование" },
  { id: 2, area_name: "Дизайн" },
  { id: 3, area_name: "Иностранные языки" },
];

const programs = [
  {
    id: 1,
    form_name: "Профессия",
    area_name: "Программирование",
    discipline_name: "Python",
    profile_name: "Full stack разработчик",
    price: 200000,
  },
  {
    id: 2,
    form_name: "Профессия",
    area_name: "Программирование",
    discipline_name: "JavaScript",
    profile_name: "Frontend разработчик",
    price: 90000,
  },
  {
    id: 3,
    form_name: "Профессия",
    area_name: "Программирование",
    discipline_name: "JavaScript",
    profile_name: "Backend разработчик",
    price: 120000,
  },
  {
    id: 4,
    form_name: "Курс",
    area_name: "Программирование",
    discipline_name: "JavaScript",
    profile_name: "Основы JavaScript",
    price: 30000,
  },
  {
    id: 5,
    form_name: "Курс",
    area_name: "Программирование",
    discipline_name: "SQL",
    profile_name: "Основы SQL",
    price: 50000,
  },
  {
    id: 6,
    form_name: "Профессия",
    area_name: "Дизайн",
    discipline_name: "2D",
    profile_name: "Графический дизайнер",
    price: 50000,
  },
  {
    id: 7,
    form_name: "Профессия",
    area_name: "Дизайн",
    discipline_name: "3D",
    profile_name: "Дизайнер интерьера",
    price: 50000,
  },
  {
    id: 8,
    form_name: "Профессия",
    area_name: "Дизайн",
    discipline_name: "3D",
    profile_name: "3D художник",
    price: 50000,
  },
  {
    id: 9,
    form_name: "Курс",
    area_name: "Иностранные языки",
    discipline_name: "Английский язык",
    profile_name: "Разговорный английский",
    price: 50000,
  },
];

/* 

const Development = () => {
    programs.map( ({area_name, discipline_name, profile_name}) => 
        return (
            <div className={css.development}>
                <p className={css.area_name}>{area_name}</p>
                <p className={css.form_name}>Профессии</p>
                <div className={css.areas}>
                <div className={`${css.JavaScript_Frontend} ${css.area}`}>
                    <div className="discipline">{discipline_name}</div>
                    <div className="program_name">{profile_name}</div>
                </div>
                <div className={`${css.JavaScript_Backend} ${css.area}`}>
                    <div className="discipline">{discipline_name}</div>
                    <div className="program_name">{profile_name}</div>
                </div>
                <div className={`${css.Python_Full} ${css.area}`}>
                    <div className="discipline">{discipline_name}</div>
                    <div className="program_name">{profile_name}</div>
                </div>
                </div>
                <p className={css.form_name}>Курсы</p>
                <div className={css.areas}>
                <div className={`${css.JavaScript_Base} ${css.area}`}>
                    <div className="program_name">{profile_name}</div>
                </div>
                <div className={`${css.sql} ${css.area}`}>
                    <div className="program_name">{profile_name}</div>
                </div>
                </div>
            </div>
        );
    );
}
 */

const All_Programs = () => {
  return (
    <div className={css.all_programs}>

      <div className={css.development}>
        <p className={css.area_name}>{areas[0].area_name}</p>
        <p className={css.form_name}>Профессии</p>
        <div className={css.areas}>
          <div className={`${css.JavaScript_Frontend} ${css.area}`}>
            <div className="discipline">{programs[1].discipline_name}</div>
            <div className="program_name">{programs[1].profile_name}</div>
          </div>
          <div className={`${css.JavaScript_Backend} ${css.area}`}>
            <div className="discipline">{programs[2].discipline_name}</div>
            <div className="program_name">{programs[2].profile_name}</div>
          </div>
          <div className={`${css.Python_Full} ${css.area}`}>
            <div className="discipline">{programs[0].discipline_name}</div>
            <div className="program_name">{programs[0].profile_name}</div>
          </div>
        </div>
        <p className={css.form_name}>Курсы</p>
        <div className={css.areas}>
          <div className={`${css.JavaScript_Base} ${css.area}`}>
            <div className="program_name">{programs[3].profile_name}</div>
          </div>
          <div className={`${css.sql} ${css.area}`}>
            <div className="program_name">{programs[4].profile_name}</div>
          </div>
        </div>
      </div>

      <div className={css.design}>
        <p className={css.area_name}>{areas[1].area_name}</p>
        <p className={css.form_name}>Профессии</p>
        <div className={css.areas}>
          <div className={`${css.painter_3d} ${css.area}`}>
            <div className="program_name">{programs[7].profile_name}</div>
          </div>
          <div className={`${css.designer_3d} ${css.area}`}>
            <div className="program_name">{programs[6].profile_name}</div>
          </div>
          <div className={`${css.painter_2d} ${css.area}`}>
            <div className="program_name">{programs[5].profile_name}</div>
          </div>
        </div>
      </div>

      <div className={css.languages}>
        <p className={css.area_name}>{areas[2].area_name}</p>
        <p className={css.form_name}>Курсы</p>
        <div className={css.areas}>
          <div className={`${css.inglish_spoken} ${css.area}`}>
            <div className="program_name">{programs[8].profile_name}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default All_Programs;
