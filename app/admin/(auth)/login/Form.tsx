"use client";

import { useActionState, useEffect } from "react";
import { LoginAdmin } from "./action";
import { Lock, User2 } from "lucide-react";
import { useErrorModal, useSuccessModal } from "@/app/contexts/feedbackContext";
import { useRouter } from "next/navigation";

const initialState = { error: "", success: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(LoginAdmin, initialState);

  const { setSuccessMsg } = useSuccessModal();
  const { setErrorMsg } = useErrorModal();

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setSuccessMsg(state.success);
      router.replace("/admin/dashboard");
    }
    if (state.error) {
      setErrorMsg(state.error);
    }
  }, [state]);
  return (
    <form action={action} className="auth">
      <h3>welcome back</h3>
      <label>
        <User2 />
        <input type="text" name="username" placeholder="enter username.." />
      </label>
      <label>
        <Lock />
        <input
          type="password"
          name="password"
          placeholder="enter password..."
        />
      </label>
      <button type="submit" disabled={pending}>
        {pending ? "logging..." : "login"}
      </button>
    </form>
  );
}
