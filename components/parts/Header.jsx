import styles from "styles/modules/header.module.scss";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [completed, setCompleted] = useState(0);
  const header = useRef(null);

  useEffect(() => {
    const loading = setTimeout(() => {
      setCompleted(100);
      setTimeout(() => {
        header.current.classList.add("inactive");
      }, 1500);
    }, 1000);
    return () => clearTimeout(loading);
  }, []);

  return (
    <div id={styles.header} ref={header}>
      <div className={styles.progressbar}>
        <div className={styles.filler} style={{ width: `${completed}%` }} />
      </div>
    </div>
  );
};

export default Header;
