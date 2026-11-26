"use client";

import styles from "./skeleton.module.css";

export default function LoadingSkeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.country}></div>
      <section className={styles.countries}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <div className={styles.search}></div>
    </div>
  );
}
