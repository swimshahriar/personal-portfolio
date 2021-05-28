import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

// style
import styles from "../../styles/components/Header/Header.module.scss";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);

      /*===== MENU SHOW =====*/
      const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

        if (toggle && nav) {
          toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
          });
        }
      };
      showMenu("nav-toggle", "nav-menu");

      /*===== ACTIVE AND REMOVE MENU =====*/
      const navLink = document.querySelectorAll(".nav__link");

      function linkAction() {
        /*Active link*/
        navLink.forEach((n) => n.classList.remove("active"));
        this.classList.add("active");

        /*Remove menu mobile*/
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show");
      }
      navLink.forEach((n) => n.addEventListener("click", linkAction));
    }
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href="/" className={styles.nav__logo}>
            Shahriar
          </Link>
        </div>

        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="/#home" className={styles.nav__link}>
                Home
              </Link>
            </li>
            <li className={styles.nav__item}>
              <a href="#about" className={styles.nav__link}>
                About
              </a>
            </li>
            <li className={styles.nav__item}>
              <Link href="#skills" className={styles.nav__link}>
                Skills
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#portfolio" className={styles.nav__link}>
                Portfolio
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="#contact" className={styles.nav__link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={styles.nav__toggle}
          id="nav-toggle"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <FiMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
