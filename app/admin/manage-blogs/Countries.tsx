"use client";

import { Countries } from "@/app/components/Countries";
import { useRouter, useSearchParams } from "next/navigation";
import "./modify.css";

export default function SelectAdminCountries({
  pcountry,
}: {
  pcountry: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = (country: string) => {
    if (!country) return;
    const params = new URLSearchParams(searchParams.toString());
    if (country) {
      params.set("country", country);
      params.set("page", "1");
    }
    router.push(`/admin/manage-blogs?${params}`);
  };
  return (
    <div className="countries">
      {Countries.length ? (
        <>
          {Countries.map((country) => (
            <button
              type="button"
              key={country.id}
              onClick={() => handleSelect(country.country)}
              className={pcountry === country.country ? "active" : ""}
            >
              <span className={country.country === pcountry ? "flag" : ""}>
                {country.flag}
              </span>
              <span className={country.country === pcountry ? "name" : ""}>
                {country.country}
              </span>
            </button>
          ))}
        </>
      ) : (
        <p>no countries</p>
      )}
    </div>
  );
}
