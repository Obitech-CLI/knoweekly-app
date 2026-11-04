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
        <Image alt="" src={hero} height={250} width={900} />
        <h1>
          The World,<br></br>One Week<br></br>at a Time
        </h1>
        <button type="button">Explore This Week</button>
      </div>
    </main>
  );
}
