"use client";

import styles from "./skeleton.module.css";

export default function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.country}></div>
      <div className={styles.countries}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.search}></div>
    </div>
  );
}
