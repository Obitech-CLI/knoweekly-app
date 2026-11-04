"use client";

import { useActionState, useEffect, useState } from "react";
import { DeleteButton } from "./Delete";
import { EditBlog } from "./action";
import Image from "next/image";
import { Delete, Edit2, Link2, X } from "lucide-react";
import { useErrorModal, useSuccessModal } from "@/app/contexts/feedbackContext";
import { useRouter } from "next/navigation";

type blogType = {
  id: number;
  country: string;
  created_at: string;
  title: string;
  image: string;
  content: string;
  source_url: string;
  author: string;
};

type Props = {
  blog: blogType;
};

const initialState = {
  error: "",
  success: "",
};

export function ManageBlog({ blog }: Props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [state, action, pending] = useActionState(EditBlog, initialState);

  const { setSuccessMsg } = useSuccessModal();
  const { setErrorMsg } = useErrorModal();

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setSuccessMsg(state.success);
      router.refresh();
    }
    if (state.error) {
      setErrorMsg(state.error);
    }
  }, [state]);
  return (
    <>
      <article>
        <h2>{blog.title}</h2>
        <Image alt="" src={blog.image} height={200} width={300} />
        <div>
          <button type="button" onClick={() => setEditing(true)}>
            <Edit2 color="blue" />
          </button>
          <button type="button" onClick={() => setDeleting(true)}>
            <Delete color="red" />
          </button>
        </div>
      </article>
      {editing && (
        <form action={action}>
          <button type="button" onClick={() => setEditing(false)}>
            <X />
          </button>
          <h3>update blog</h3>
          <input type="hidden" name="id" defaultValue={blog.id} />
          <input type="hidden" name="country" defaultValue={blog.country} />
          <label>
            title
            <input
              type="input"
              name="title"
              defaultValue={blog.title}
              placeholder="update blog title..."
            />
          </label>
          <label>
            image
            <input type="file" name="image" accept="image/*" />
          </label>
          <label>
            content
            <textarea
              name="content"
              defaultValue={blog.content}
              placeholder="update blog content..."
            />
          </label>
          <label>
            source url
            <input
              type="input"
              name="source-url"
              defaultValue={blog.source_url}
              placeholder="update blog source link..."
            />
          </label>
          <button type="submit" disabled={pending}>
            {pending ? "updating..." : "update"}
          </button>
        </form>
      )}
      {deleting && (
        <DeleteButton
          id={blog.id}
          setDeleting={setDeleting}
          editing={editing}
        />
      )}
    </>
  );
}
