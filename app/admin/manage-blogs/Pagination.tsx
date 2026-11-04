"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  const handlePage = (newPage: number) => {
    if (newPage < 1) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));

    setPage(newPage);

    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div className="pagination">
      {page > 1 && (
        <button type="button" onClick={() => handlePage(page - 1)}>
          <ChevronLeft />
        </button>
      )}

      <span>Page {page}</span>

      <button type="button" onClick={() => handlePage(page + 1)}>
        <ChevronRight />
      </button>
    </div>
  );
}
