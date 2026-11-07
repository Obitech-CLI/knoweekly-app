import { getBlogs } from "@/app/lib/blogs";
import { ManageBlog } from "./ManageBlog";
import { Search } from "./Search";
import SelectAdminCountries from "./Countries";
import { Pagination } from "./Pagination";
import { Suspense } from "react";
import { RetryButton } from "@/app/components/Retry";

export type blogType = {
  id: number;
  country: string;
  created_at: string;
  title: string;
  image: string;
  content: string;
  source_url: string;
  author: string;
};

type Type = {
  blogs?: blogType[];
  error?: string;
};

export async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{
    country?: string;
    search?: string;
    selectedDate?: string;
    page?: string;
  }>;
}) {
  const { country, search, selectedDate, page } = await searchParams;
  const res: Type = await getBlogs(country, search, selectedDate, page);
  return (
    <div className="blogs">
      <Search />
      <Suspense>
        <SelectAdminCountries pcountry={country ? country : ""} />
      </Suspense>
      <h2>{country}</h2>
      {res.blogs && (
        <>
          {res.blogs.length > 0 && (
            <>
              {res.blogs.map((blog) => (
                <ManageBlog key={blog.id} blog={blog} />
              ))}
            </>
          )}
        </>
      )}

      {res.error && (
        <div className="error">
          <p>{res.error}</p>
          <RetryButton />
        </div>
      )}

      <Pagination />
    </div>
  );
}
