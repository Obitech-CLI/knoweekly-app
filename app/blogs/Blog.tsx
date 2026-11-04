"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDistanceToNow } from "date-fns";

type blogType = {
  id: number;
  created_at: string;
  country: string;
  title: string;
  image: string;
};

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
      <span>
        {formatDistanceToNow(new Date(blog.created_at), {
          addSuffix: true,
        })}
      </span>
      <h2>{blog.title}</h2>
      <Image alt="" src={blog.image} height={200} width={300} />
      <button
        type="button"
        onClick={() => openArticle(blog.country, blog.title)}
      >
        read article
      </button>
    </article>
  );
}
