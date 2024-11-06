// src/components/PageSwitcher.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageSwitcher.module.scss";

const PageSwitcher: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageSwitcher}>
      <button
        onClick={() => navigate("/")}
        className={styles.button}
      >
        Home
      </button>
      <button
        onClick={() => navigate("/profile")}
        className={styles.button}
      >
        Profile
      </button>
    </div>
  );
};

export default PageSwitcher;
