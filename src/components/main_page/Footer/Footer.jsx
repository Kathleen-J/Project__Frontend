import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.copyright}>&copy; SkillFox 2022</div>
    </div>
  );
};

export default Footer;