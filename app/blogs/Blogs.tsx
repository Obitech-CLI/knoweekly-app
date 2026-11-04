import { getBlogs } from "@/app/lib/blogs";
import { Blog } from "./Blog";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import SelectCountries from "../components/Nav";

export type blogType = {
  id: number;
  created_at: string;
  country: string;
  title: string;
  image: string;
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
      <h1>{country}</h1>
      <SelectCountries pcountry={country ? country : ""} />
      <Search />
      {res.blogs && (
        <>
          {res.blogs.length > 0 && (
            <div className="blog">
              {res.blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </>
      )}

      {res.error && <p className="error">{res.error}</p>}

      <Pagination />
    </div>
  );
}
