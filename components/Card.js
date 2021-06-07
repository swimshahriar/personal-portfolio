import { useEffect } from "react";
import Image from "next/image";

import styles from "../styles/components/Card.module.scss";

const Card = ({ img, alt, title, tech, desc, liveUrl, github }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal
    sr.reveal("#card", { interval: 200 });
  }, []);

  return (
    <div className={styles.card} id="card">
      <Image src={img} alt={alt} width={500} height={400} />

      <div className={styles.card__details}>
        <div className={styles.card__tech}>
          {tech.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <h3 className={styles.card__title}>{title}</h3>

        <p className={styles.card__desc}>{desc}</p>
        <div className={styles.card__links}>
          <a href={liveUrl} target="_blank">
            Live
          </a>
          <a href={github} target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
