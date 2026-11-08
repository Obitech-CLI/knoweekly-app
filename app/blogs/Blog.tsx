"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import { blogType } from "./Blogs";
import { LinkIcon } from "lucide-react";

type Props = {
  blog: blogType;
};

export function Blog({ blog }: Props) {
  const router = useRouter();
  const openArticle = (country: string, title: string) => {
    router.push(
      `/blog?country=${encodeURIComponent(country)}&title=${encodeURIComponent(title)}`,
    );
  };
  return (
    <article key={blog.id}>
      {/*<span>
            {formatDistanceToNowStrict(new Date(res.blog.created_at), {
              addSuffix: true,
            })}
          </span>*/}
      <span>
        {formatDistanceToNow(new Date(blog.created_at), {
          addSuffix: true,
        })}
      </span>
      <h2>{blog.headline}</h2>
      <Image alt="" src={blog.image} height={200} width={300} />
      <h3>{blog.description}</h3>
      <p>
        <strong>source: </strong>
        {blog.source}
      </p>
      <Link href={blog.source_link}>
        read full story <LinkIcon />
      </Link>
    </article>
  );
}
