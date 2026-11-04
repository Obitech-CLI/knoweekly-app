"use server";

import { supabase } from "@/app/lib/supabase/supabase";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const CreateAdmin = async (prevData: any, formData: FormData) => {
  const username = (formData.get("username") as string).trim().toLowerCase();
  const email = (formData.get("email") as string).trim().toLowerCase();
  const password = (formData.get("password") as string).trim().toLowerCase();

  const cookieStore = await cookies();
  const SECRET = process.env.JWT_SECRET as string;

  try {
    if (!username || !email || !password) {
      return { error: "empty input detected", success: "" };
    }

    const { data, error } = await supabase
      .from("admin")
      .select("username, email")
      .or(`username.eq.${username},email.eq.${email}`)
      .maybeSingle();

    if (error) {
      return { error: "something went wrong", success: "" };
    }

    if (data) {
      return { error: "invalid credentials", success: "" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: admin, error: insertError } = await supabase
      .from("admin")
      .insert({
        username: username,
        email: email,
        password: hashedPassword,
      })
      .select("id")
      .single();

    if (insertError) {
      return { error: "failed to create account. try again", success: "" };
    }

    const token = jwt.sign({ id: admin.id }, SECRET, { expiresIn: "1h" });

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    return { success: "account created success", error: "" };
  } catch (err) {
    console.error(err);
    return { error: "server error", success: "" };
  }
};
