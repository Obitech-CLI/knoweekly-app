"use client";

import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getLocalDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const maxDate = getLocalDate(today);

  const minDate = new Date(today);
  minDate.setDate(minDate.getDate() - 7);

  const min = getLocalDate(minDate);

  const selectedDate = searchParams.get("selectedDate") || maxDate;

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [date, setDate] = useState(selectedDate);

  const changeDate = (days: number) => {
    const [year, month, day] = date.split("-").map(Number);

    const d = new Date(year, month - 1, day, 12);
    d.setDate(d.getDate() + days);

    const newDate = getLocalDate(d);

    if (newDate < min || newDate > maxDate) {
      return;
    }

    setDate(newDate);

    const params = new URLSearchParams(searchParams.toString());

    params.set("selectedDate", newDate);
    params.set("page", "1");

    router.replace(`/blogs?${params.toString()}`);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(`/blogs?${params.toString()}`);
  };

  const formattedDate =
    new Date(`${date}T12:00:00`).toDateString() === new Date().toDateString()
      ? "Today"
      : new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
          day: "2-digit",
          weekday: "long",
          year: "numeric",
        });

  return (
    <fieldset>
      <h2>{formattedDate}</h2>

      <label>
        <button
          type="button"
          onClick={() => changeDate(1)}
          disabled={date >= maxDate}
        >
          <ChevronLeft />
        </button>

        <input
          type="date"
          value={date}
          min={min}
          max={maxDate}
          onChange={(e) => {
            const newDate = e.target.value;

            if (newDate < min || newDate > maxDate) {
              return;
            }

            setDate(newDate);

            const params = new URLSearchParams(searchParams.toString());

            params.set("selectedDate", newDate);
            params.set("page", "1");

            router.push(`/blogs?${params.toString()}`);
          }}
        />

        <button
          type="button"
          onClick={() => changeDate(-1)}
          disabled={date <= min}
        >
          <ChevronRight />
        </button>
      </label>

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search blogs..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button type="button" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </fieldset>
  );
}
