"use server";

import { supabase } from "@/app/lib/supabase/supabase";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export const LoginAdmin = async (prevData: any, formData: FormData) => {
  const username = (formData.get("username") as string).trim().toLowerCase();
  const password = (formData.get("password") as string).trim().toLowerCase();

  const cookieStore = await cookies();
  const SECRET = process.env.JWT_SECRET as string;

  try {
    if (!username || !password) {
      return { error: "empty input detected", success: "" };
    }

    const { data: admin, error: adminError } = await supabase
      .from("admin")
      .select("*")
      .eq("username", username)
      .single();

    if (!admin || adminError) {
      return {
        error:
          "something went wrong. check your internet connection and try again",
        success: "",
      };
    }

    const matchPassword = await bcrypt.compare(password, admin.password);

    if (!matchPassword) {
      return { error: "invalid credentials", success: "" };
    }

    const token = jwt.sign({ id: admin.id }, SECRET, { expiresIn: "1h" });

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    return { success: "login success", error: "" };
  } catch (err) {
    console.error(err);
    return { error: "server error", success: "" };
  }
};
