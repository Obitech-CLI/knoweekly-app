import Image from "next/image";
import { getBlog } from "../lib/blog";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { formatDistanceToNowStrict } from "date-fns";

export type blogType = {
  id: number;
  created_at: string;
  title: string;
  content: string;
  image: string;
  source_url: string;
  author: string;
};

type Type = {
  blog?: blogType;
  error?: string;
};

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{
    country?: string;
    title?: string;
  }>;
}) {
  const { country, title } = await searchParams;
  const res: Type = await getBlog(country, title);
  return (
    <div className="blog">
      {!country || !title ? (
        <p>invalid article selected. go back and try again</p>
      ) : null}
      {res.blog && (
        <article>
          <span>
            {formatDistanceToNowStrict(new Date(res.blog.created_at), {
              addSuffix: true,
            })}
          </span>

          <h2>{res.blog.title}</h2>
          <Image alt="" src={res.blog.image} height={250} width={300} />
          <h4>
            posted by <span>{res.blog.author}</span>
          </h4>
          <p>{res.blog.content}</p>
          <Link href={res.blog.source_url}>
            source <Link2 />
          </Link>
        </article>
      )}
      {res.error && <p>{res.error}</p>}
    </div>
  );
}
