"use server";

import { redirect } from "next/navigation";
import { supabase } from "./supabase/supabase";

export const getBlogs = async (
  country?: string,
  search?: string,
  selectedDate?: string,
  page?: string,
) => {
  const today = new Date().toISOString().split("T")[0];
  const date = selectedDate || today;

  const p = Number(page) || 1;
  const from = Number(p - 1) * 3;
  const to = from + 3 - 1;

  try {
    if (!country) {
      return { error: "select a country" };
    }
    let query = supabase
      .from("blogs")
      .select("*")
      .eq("country", country)
      .gte("created_at", `${date}T00:00:00`)
      .lt("created_at", `${date}T23:59:59.999`)
      .range(from, to)
      .order("created_at", { ascending: false });

    if (search) {
      query = query.ilike("title", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      return { error: "failed to fetch blogs. try again" };
    }

    if (data.length === 0) {
      return { error: "no blog found" };
    }

    return { blogs: data };
  } catch (err) {
    console.error(err);
    return { error: "server error" };
  }
};
