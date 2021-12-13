import Link from "next/link";
import css from "./Navigation.component.module.css";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <header>
      <nav className={`container ${css.navigation}`}>
        <div className={css.logo}>
          <Link href="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <Link href="/about">
          <a className={css.about}>about</a>
        </Link>
        <a
          href="https://github.com/webthreenyc/submityourtalk/blob/main/speakers.md"
          className={css.speakers}
        >
          speakers
        </a>
        <Link href="/sponsor">
          <a className={css.sponsor}>sponsor</a>
        </Link>
      </nav>
    </header>
  );
};
