import { Suspense } from "react";
import { Blogs } from "./Blogs";
import "./modify.css";

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
    <main>
      <h1>manage blogs</h1>
      <Suspense fallback={<p>loading blogs...</p>}>
        <Blogs searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
