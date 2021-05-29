import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";

// style
import styles from "../../styles/components/Hero/Hero.module.scss";

const TEXTS = ["Software Developer", "Tech Enthusiast"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className={styles.hero + " sectionStyle"}>
      <div className={styles.hero__img}>
        <Image src="/perfil.png" alt="shahriar" width={400} height={400} />
      </div>

      <div className={styles.hero__data}>
        <h1 className={styles.hero__title}>
          Hi <span className={styles.hero__titleWave}>👋</span> <br /> I'am{" "}
          <span className={styles.hero__titleColor}>Shahriar</span>
          <br />
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h1>
        <Link href="/#contact">
          <a className="button">Contact</a>
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
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.github.com/swimshahriar"
            target="_blank"
            className={styles.hero__socialIcon}
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
