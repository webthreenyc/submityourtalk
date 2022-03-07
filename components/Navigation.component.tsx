import Link from "next/link";
import css from "./Navigation.component.module.css";

export const Navigation: React.FC = () => {
  return (
    <header>
      <nav className={`container ${css.navigation}`}>
        <Link href="/about">
          <a className={css.about}>about</a>
        </Link>
        <a
          href="https://github.com/webthreenyc/submityourtalk/blob/main/speakers.md"
          className={css.speakers}
          target="_blank"
          rel="noreferrer"
        >
          speakers
        </a>
        <a
          href="https://twitter.com/webthreenyc"
          className={css.birdApp}
          target="_blank"
          rel="noreferrer"
        >
          bird app
        </a>
      </nav>
    </header>
  );
};
