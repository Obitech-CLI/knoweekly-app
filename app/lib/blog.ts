"use server";

import { supabase } from "./supabase/supabase";

export const getBlog = async (country?: string, title?: string) => {
  try {
    let query = supabase
      .from("blogs")
      .select("*")
      .eq("country", country)
      .eq("title", title)
      .maybeSingle();

    const { data, error } = await query;

    if (error) {
      return { error: "something went wrong. try again" };
    }

    if (!data) {
      return { error: "no blog found" };
    }

    return { blog: data };
  } catch (err) {
    console.error(err);
    return {
      error:
        "something went wrong. please check your internet connection and try again",
    };
  }
};
