"use client";

import { useState } from "react";
import styles from "./skeleton.module.css";

export default function LoadingSkeleton() {
  const [skeletons] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className={styles.skeletons}>
      {skeletons.map((index) => (
        <div key={index} className={styles.skeleton}>
          <div className={styles.date}></div>
          <div className={styles.headline}></div>
          <div className={styles.img}></div>
          <div className={styles.p}></div>
          <div className={styles.source}></div>
          <div className={styles.url}></div>
        </div>
      ))}
    </div>
  );
}
