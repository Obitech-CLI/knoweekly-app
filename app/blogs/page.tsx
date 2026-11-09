import { Suspense } from "react";
import { Blogs } from "./Blogs";
import "./blogs.css";
import LoadingSkeleton from "./Skeleton";

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
      <Suspense fallback={<LoadingSkeleton />}>
        <Blogs searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
