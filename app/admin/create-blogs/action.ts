"use server";

import { supabase } from "@/app/lib/supabase/supabase";

export const CreateBlog = async (prevData: any, formData: FormData) => {
  const country = (formData.get("country") as string).trim().toLowerCase();
  const headline = (formData.get("headline") as string).trim().toLowerCase();
  const description = (formData.get("description") as string)
    .trim()
    .toLowerCase();
  const source = (formData.get("source") as string).trim().toLowerCase();
  const sourceLink = (formData.get("source-link") as string)
    .trim()
    .toLowerCase();
  const image = formData.get("image") as File;

  try {
    if (!country || !headline || !description || !sourceLink || !source) {
      return { error: "empty input detected", success: "" };
    }

    if (!image || image.size === 0) {
      return { error: "no image uploaded", success: "" };
    }

    const fileName = `${Date.now()}-${image.name}`;

    const { error: storageError } = await supabase.storage
      .from("blog_images")
      .upload(`${country}/${fileName}`, image, {
        contentType: image.type,
      });

    if (storageError) {
      return { error: "storage failed to save image. try again", success: "" };
    }

    const { data: fileUrl } = supabase.storage
      .from("blog_images")
      .getPublicUrl(`${country}/${fileName}`);

    const { error: insertError } = await supabase.from("blogs").insert({
      country: country,
      headline: headline,
      description: description,
      source: source,
      source_link: sourceLink,
      image: fileUrl.publicUrl,
    });

    if (insertError) {
      return {
        error:
          "failed to create blog. check your internet connetion and try again",
        success: "",
      };
    }

    return { success: "blog created success", error: "" };
  } catch (err) {
    console.error(err);
    return { error: "server error", success: "" };
  }
};
