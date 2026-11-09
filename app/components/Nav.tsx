"use client";

import { useState } from "react";
import { Countries } from "./Countries";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectCountries({ pcountry }: { pcountry: string }) {
  const [selectedCountry, setCountry] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();

  const handleSelect = (country: string) => {
    if (!country) return;
    const params = new URLSearchParams(searchParams.toString());
    if (country) {
      params.set("country", country);
      params.set("page", "1");
    }
    if (pathname === "/") {
      router.push(`/blogs?${params}`);
    } else {
      router.replace(`/blogs?${params}`);
    }
  };
  return (
    <div className="countries" style={{ margin: "0 0.5rem" }}>
      {Countries.length ? (
        <>
          {Countries.map((country) => (
            <button
              type="button"
              key={country.id}
              onClick={() => {
                handleSelect(country.country);
                setCountry(country.country);
              }}
              className={pcountry === country.country ? "active" : ""}
            >
              <span className={pcountry === country.country ? "flag" : ""}>
                {country.flag}
              </span>
              <span className={pcountry === country.country ? "name" : ""}>
                {country.country}
              </span>
            </button>
          ))}
        </>
      ) : (
        <p className="error">no countries</p>
      )}
    </div>
  );
}
