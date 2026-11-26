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
      {blog.country === "united states" && (
        <span>
          {new Date(blog.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      )}
      {blog.country === "canada" && (
        <span>
          {new Date(blog.created_at).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      )}
      {blog.country === "united kingdom" && (
        <span>
          {new Date(blog.created_at).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      )}
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
