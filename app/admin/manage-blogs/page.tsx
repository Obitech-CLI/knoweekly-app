import { Suspense } from "react";
import { Blogs } from "./Blogs";
import "./modify.css";
import LoadingSkeleton from "@/app/blogs/Skeleton";

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
      <Suspense fallback={<LoadingSkeleton />}>
        <Blogs searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
