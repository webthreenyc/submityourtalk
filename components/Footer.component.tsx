import css from "./Footer.component.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={`container ${css.footer}`}>
      <p className={css.conduct}>
        webthree.nyc expects all speakers and attendees to follow the{" "}
        <a href="https://jsconf.com/codeofconduct.html">
          JSConf code of conduct
        </a>{" "}
        and the{" "}
        <a href="https://www.recurse.com/social-rules">RC Social Rules</a>
      </p>
    </footer>
  );
};
