import { useEffect } from "react";

// styles
import styles from "../../styles/components/SkillItem/SkillItem.module.scss";

const SkillItem = ({ icon, title }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal
    sr.reveal(".item", { interval: 50 });
  }, []);

  return (
    <div className={styles.skill + " item"}>
      {icon} <p>{title}</p>
    </div>
  );
};

export default SkillItem;
