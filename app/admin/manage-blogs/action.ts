"use server";

import { supabase } from "@/app/lib/supabase/supabase";

export const DeleteBlog = async (prevData: any, formData: FormData) => {
  const id = formData.get("id") as string;
  const confirm = (formData.get("confirm") as string).trim().toLowerCase();
  try {
    if (!id) {
      return { error: "invalid request", success: "" };
    }

    if (!confirm) {
      return { error: "enter confirm phrase", success: "" };
    }

    if (confirm.toLowerCase().trim() !== "i want to delete") {
      return { error: "invalid confirm message", success: "" };
    }
    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) {
      return { error: "failed to delete blog. try again", success: "" };
    }

    return { success: "blog deleted success", error: "" };
  } catch (err) {
    console.error(err);
    return { error: "server error", success: "" };
  }
};

export const EditBlog = async (prevData: any, formData: FormData) => {
  const id = formData.get("id") as string;
  const country = (formData.get("country") as string).trim().toLowerCase();
  const title = (formData.get("title") as string).trim().toLowerCase();
  const content = (formData.get("content") as string).trim().toLowerCase();
  const sourceUrl = (formData.get("source-url") as string).trim().toLowerCase();
  const image = formData.get("image") as File;
  try {
    if (!image || image.size === 0) {
      const { error } = await supabase
        .from("blogs")
        .update({
          title: title,
          content: content,
          source_url: sourceUrl,
        })
        .eq("id", id);

      if (error) {
        return { error: "failed to update blog. try again", success: "" };
      }

      return { success: "blog updated success", error: "" };
    }

    const fileName = `${Date.now()}-${image.name}`;

    const { error: storageError } = await supabase.storage
      .from("blog_images")
      .upload(`${country}/${fileName}`, image, {
        contentType: image.type,
      });

    if (storageError) {
      return {
        error: "failed to save new image file to storage. try again",
        success: "",
      };
    }

    const { data: Url } = supabase.storage
      .from("blog_images")
      .getPublicUrl(`${country}/${fileName}`);

    const { error } = await supabase
      .from("blogs")
      .update({
        title: title,
        content: content,
        source_url: sourceUrl,
        image: Url.publicUrl,
      })
      .eq("id", id);

    if (error) {
      return { error: "failed to update blog. try again", success: "" };
    }

    return { success: "blog updated success", error: "" };
  } catch (err) {
    console.error(err);
    return { error: "server error", success: "" };
  }
};
