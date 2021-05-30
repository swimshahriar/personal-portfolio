import { useState, useEffect } from "react";
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

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onResizeHandler = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.onresize = onResizeHandler;
  }, []);

  return (
    <section className={styles.hero + " sectionStyle"}>
      <div className={styles.hero__img}>
        <Image
          src="/perfil.png"
          alt="shahriar"
          width={isMobile ? 250 : 400}
          height={isMobile ? 250 : 400}
        />
      </div>

      <div className={styles.hero__data}>
        <h1 className={styles.hero__title}>
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
            className={styles.hero__socialIcon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://stackoverflow.com/users/12624145/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon}
          >
            <FaStackOverflow />
          </a>
          <a
            href="https://www.github.com/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
