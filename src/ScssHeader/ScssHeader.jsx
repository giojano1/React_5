import React from "react";
import styles from "./ScssHeader.module.scss";
const ScssHeader = () => {
  return (
    <div className={styles.myHeader}>
      <h1>ScssHeader</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default ScssHeader;
