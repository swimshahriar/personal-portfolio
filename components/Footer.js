// styles
import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()}. Shahriar Swim.</p>
    </footer>
  );
};

export default Footer;
