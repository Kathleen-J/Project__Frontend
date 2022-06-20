import css from "./ContentAreas.module.css";

const ContentAreas = () => {
  return (
    <div>
      <div className={css.content_areas}>
        <div className={css.areas}>Направления</div>
        <div className={css.all_areas}>
          <div className={css.area}>
            <p className={`${css.name} ${css.development}`}>Программирование</p>
            <div className={css.lineDecorator}></div>
            <p className={css.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab
              magnam accusamus, quae ratione fugiat maiores? Libero id sapiente
              ea. Lorem ipum dolor sit amet consectetur adipisicing elit.
              Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas
              eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id
              sapiente ea explicabo iure beatae quas eum, ab magnam accusamus,
              quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eligendi qui libero
              fuga rerum quaerat explicabo iure beatae quas eum
            </p>
          </div>
          <div className={css.area}>
            <p className={`${css.name} ${css.design}`}>Дизайн</p>
            <div className={css.lineDecorator}></div>
            <p className={css.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab
              magnam accusamus, quae ratione fugiat maiores? Libero id sapiente
              ea. Lorem ipum dolor sit amet consectetur adipisicing elit.
              Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas
              eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id
              sapiente ea explicabo iure beatae quas eum, ab magnam accusamus,
              quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eligendi qui libero
              fuga rerum quaerat explicabo iure beatae quas eum
            </p>
          </div>
          <div className={css.area}>
            <p className={`${css.name} ${css.languages}`}>Иностранные языки</p>
            <div className={css.lineDecorator}></div>
            <p className={css.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              qui libero fuga rerum quaerat explicabo iure beatae quas eum, ab
              magnam accusamus, quae ratione fugiat maiores? Libero id sapiente
              ea. Lorem ipum dolor sit amet consectetur adipisicing elit.
              Eligendi qui libero fuga rerum quaerat explicabo iure beatae quas
              eum, ab magnam accusamus, quae ratione fugiat maiores? Libero id
              sapiente ea explicabo iure beatae quas eum, ab magnam accusamus,
              quae ratione fugiat maiores? Libero id sapiente ea. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eligendi qui libero
              fuga rerum quaerat explicabo iure beatae quas eum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAreas;