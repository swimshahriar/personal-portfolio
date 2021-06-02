import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// style
import styles from "../../styles/components/Hero/Hero.module.scss";

const Hero = ({ isMobile }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal
    sr.reveal(".title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".img", { delay: 400 });
    sr.reveal(".icon", { interval: 250 });
  }, []);

  return (
    <section className={styles.hero + " sectionStyle"} id="home">
      <div className={styles.hero__img + " img"}>
        <Image
          src="/shahriar.png"
          alt="shahriar"
          width={isMobile ? 550 : 700}
          height={isMobile ? 380 : 500}
        />
      </div>

      <div className={styles.hero__data}>
        <h1 className={styles.hero__title + " title"}>
          Hi <span className={styles.hero__titleWave}>👋</span> <br /> I'am{" "}
          <span className={styles.hero__titleColor}>Shahriar</span>
          <br />
          Software Developer
        </h1>
        <Link href="/#contact">
          <a className="button">
            <span className="buttonIcon">
              <MdEmail />
            </span>
            Contact
          </a>
        </Link>

        <div className={styles.hero__social}>
          <a
            href="https://www.linkedin.com/in/swimshahriar/"
            target="_blank"
            className={styles.hero__socialIcon + " icon"}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon + " icon"}
          >
            <FaTwitter />
          </a>
          <a
            href="https://stackoverflow.com/users/12624145/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon + " icon"}
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://www.github.com/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon + " icon"}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
