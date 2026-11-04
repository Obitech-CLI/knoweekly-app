import { Suspense } from "react";
import Blog from "./Blog";
import "./blog.css";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{
    country?: string;
    title?: string;
  }>;
}) {
  return (
    <main>
      <Suspense fallback={<p>loading blog...</p>}>
        <Blog searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
