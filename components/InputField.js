import { useEffect } from "react";

// styles
import styles from "../styles/components/InputField.module.scss";

const InputField = ({
  type = "text",
  placeholder = "type here",
  required = false,
  row = 10,
  col = 30,
  id,
  title,
}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal
    sr.reveal("#label", { interval: 200 });
    sr.reveal(".input", { interval: 200 });
  }, []);

  if (type === "textarea") {
    return (
      <>
        <label id="label" htmlFor={id} className={styles.inputField__label}>
          {title}
        </label>
        <br />
        <textarea
          type={type}
          rows={row}
          cols={col}
          placeholder={placeholder}
          required={required}
          id={id}
          className={styles.inputField__input + " input"}
        />
        <br />
      </>
    );
  } else {
    return (
      <>
        <label id="label" htmlFor={id} className={styles.inputField__label}>
          {title}
        </label>
        <br />
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          id={id}
          className={styles.inputField__input + " input"}
        />
        <br />
      </>
    );
  }
};

export default InputField;
