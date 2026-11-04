"use client";

import { useActionState, useEffect } from "react";
import { CreateAdmin } from "./action";
import { Lock, Mail, User2 } from "lucide-react";
import { useErrorModal, useSuccessModal } from "@/app/contexts/feedbackContext";
import { useRouter } from "next/navigation";

const initialState = {
  error: "",
  success: "",
};

export function CreateForm() {
  const [state, action, pending] = useActionState(CreateAdmin, initialState);

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
      <label>
        <User2 />
        <input type="text" name="username" placeholder="enter username..." />
      </label>
      <label>
        <Mail />
        <input type="email" name="email" placeholder="enter email address..." />
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
        {pending ? "creating..." : "create"}
      </button>
    </form>
  );
}
