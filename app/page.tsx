import Image from "next/image";
import SelectCountries from "./components/Nav";
import hero from "@/public/hero.jpg";
import styles from "./page.module.css";
import { Suspense } from "react";
import { Calendar, Globe, Link2, Link2Off, Newspaper } from "lucide-react";
import { Countries } from "./components/Countries";

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
          Stay Informed,<br></br>One Week at a Time
        </h1>
        <button type="button">Explore This Week</button>
        <Image alt="" src={hero} height={300} width={900} loading="eager" />
      </div>
      <div className={styles.discover}>
        <h2>Discover what's happening</h2>
        <h4>
          explore latest weekly news discoveries, important headlines, and
          interesting developments from around the world
        </h4>
      </div>
      <div className={styles.preferred_countries}>
        <h2>Your world, your updates</h2>
        <h3>
          Choose your preferred country to discover the latest stories and
          developments that matter to you.
        </h3>
        <div>
          {Countries.map((c) => (
            <div key={c.id}>
              <h4>{c.country}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.why}>
        <h2>why knoweekly?</h2>
        <h3>more discovery. less searching.</h3>
        <h4>
          knoweekly helps you discover important stories without having to visit
          multiple websites to find what's happening.
        </h4>
        <div>
          <div>
            <span>
              <Globe size={30} />
            </span>
            <h3>global perspective</h3>
            <p>Discover stories from different countries and regions.</p>
          </div>
          <div>
            <span>
              <Newspaper size={30} />
            </span>
            <h3>curated discoveries</h3>
            <p>
              Find interesting developments and headlines worth your attention.
            </p>
          </div>
          <div>
            <span>
              <Link2 size={30} />
            </span>
            <h3>Trusted sources</h3>
            <p>
              Follow links to original publishers for complete stories and
              further details.
            </p>
          </div>
          <div>
            <span>
              <Calendar size={30} />
            </span>
            <h3>Fresh updates</h3>
            <p>
              Explore recent developments and stories from the past seven days.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2>The world moves fast. Stay in the know.</h2>
        <h3>
          Knoweekly is a news discovery platform designed to help you find
          interesting stories, follow important developments, and stay connected
          with what's happening around the world.
        </h3>
        <h3>
          We bring discoverable headlines and original sources together, making
          it easier to find the stories worth your time.
        </h3>
      </div>
      <div className={styles.cta}>
        <h2>There's always something happening.</h2>
        <h3>Discover the stories shaping your world today.</h3>
      </div>
    </main>
  );
}
