import Link from "next/link";
import { FiMenu } from "react-icons/fi";

// style
import styles from "../../styles/components/Header/Header.module.scss";

const Header = () => {
  // active link indicator
  const activeLinkHanlder = (event) => {
    const navLinks = document.querySelectorAll(".link");
    navLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");

    document.getElementById("nav-menu").classList.remove("show");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav + " sectionStyle"}>
        <div>
          <Link href="/">
            <a className={styles.nav__logo}>Shahriar</a>
          </Link>
        </div>

        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="/#home">
                <a
                  className={styles.nav__link + " link active"}
                  onClick={activeLinkHanlder}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#about">
                <a
                  className={styles.nav__link + " link"}
                  onClick={(event) => activeLinkHanlder(event)}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#skills">
                <a
                  className={styles.nav__link + " link"}
                  onClick={(event) => activeLinkHanlder(event)}
                >
                  Skills
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#portfolio">
                <a
                  className={styles.nav__link + " link"}
                  onClick={(event) => activeLinkHanlder(event)}
                >
                  Portfolio
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#contact">
                <a
                  className={styles.nav__link + " link"}
                  onClick={(event) => activeLinkHanlder(event)}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={styles.nav__toggle}
          onClick={() =>
            document.getElementById("nav-menu").classList.toggle("show")
          }
        >
          <FiMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
