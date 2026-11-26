import { Suspense } from "react";
import { Blogs } from "./Blogs";
import "./blogs.css";
import { ClipLoader } from "react-spinners";
import SelectCountries from "../components/Nav";
import { Search } from "./Search";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    country?: string;
    search?: string;
    selectedDate?: string;
    page?: string;
  }>;
}) {
  const { country } = await searchParams;
  return (
    <main className="blogs">
      <h1>{country}</h1>

      <SelectCountries pcountry={country ? country : ""} />
      <Search />

      <Suspense
        fallback={
          <div className="loading">
            <p>loading news...</p>
            <ClipLoader size={50} color="var(--bg-txt)" />
          </div>
        }
      >
        <Blogs searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
