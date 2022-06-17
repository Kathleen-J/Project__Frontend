import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <p className={css.aboutUs}>О НАС</p>
      <p className={css.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui
        libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam
        accusamus, quae ratione fugiat maiores? Libero id sapiente ea. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui libero
        fuga rerum quaerat explicabo iure beatae quas eum, ab magnam accusamus,
        quae ratione fugiat maiores? Libero id sapiente ea.
      </p>
      <p className={css.line_decorator}></p>
      <p className={css.whyUs}>ПОЧЕМУ ИМЕННО МЫ</p>
      <p className={css.description}>
        Lorem ipum dolor sit amet consectetur adipisicing elit. Eligendi qui
        libero fuga rerum quaerat explicabo iure beatae quas eum, ab magnam
        accusamus, quae ratione fugiat maiores? Libero id sapiente ea explicabo
        iure beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores?
        Libero id sapiente ea. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eligendi qui libero fuga rerum quaerat explicabo iure
        beatae quas eum, ab magnam accusamus, quae ratione fugiat maiores?
        Libero id sapiente ea.
      </p>
    </div>
  );
};

export default AboutUs;