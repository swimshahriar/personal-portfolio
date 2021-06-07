// styles
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Copyright All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
