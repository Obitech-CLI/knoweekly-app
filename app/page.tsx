import Image from "next/image";
import SelectCountries from "./components/Nav";
import hero from "@/public/hero.jpg";
import styles from "./page.module.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.countries}>
        <Suspense>
          <SelectCountries pcountry="" />
        </Suspense>
      </div>
      <div className={styles.Hero}>
        <h1>
          Discover The World,<br></br>One Week at a Time
        </h1>
        <button type="button">Explore This Week</button>
        <Image alt="" src={hero} height={300} width={900} loading="eager" />
      </div>
    </main>
  );
}
