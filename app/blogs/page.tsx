import { Suspense } from "react";
import { Blogs } from "./Blogs";
import "./blogs.css";
import { ClipLoader } from "react-spinners";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{
    country?: string;
    search?: string;
    selectedDate?: string;
    page?: string;
  }>;
}) {
  return (
    <main className="blogs">
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
